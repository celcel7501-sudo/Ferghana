import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { randomUUID } from 'node:crypto';
import { loadConfig } from './config.ts';
import { GenerateRequest } from './schema.ts';
import { createGenerator, GenerationError } from './anthropic.ts';
import { applyCors, clientIp, createRateLimiter, readJson, safeEqual, sendJson } from './http.ts';

const cfg = loadConfig();
const generate = createGenerator(cfg);
const allow = createRateLimiter(cfg.requestsPerMinute);

const authorised = (req: IncomingMessage): boolean => {
  if (!cfg.clientToken) return true;
  const header = req.headers.authorization ?? '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  return safeEqual(token, cfg.clientToken);
};

const handleGenerate = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  if (!authorised(req)) {
    sendJson(res, 401, { error: 'Jeton client invalide.' });
    return;
  }
  if (!allow(clientIp(req))) {
    res.setHeader('Retry-After', '30');
    sendJson(res, 429, { error: 'Trop de requetes. Reessayez dans quelques secondes.' });
    return;
  }

  let body: unknown;
  try {
    body = await readJson(req);
  } catch (err) {
    sendJson(res, 400, { error: err instanceof Error ? err.message : 'Corps illisible.' });
    return;
  }

  const parsed = GenerateRequest.safeParse(body);
  if (!parsed.success) {
    sendJson(res, 400, { error: 'Requete invalide.', details: parsed.error.issues });
    return;
  }

  const started = Date.now();
  try {
    const payload = await generate({
      brief: parsed.data.brief,
      scope: parsed.data.scope,
      refine: parsed.data.refine,
    });

    // `budget` et `hookVerseRatio` sont volontairement absents : l'application
    // les recalcule elle-meme sur le texte recu.
    sendJson(res, 200, {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      scope: 'full',
      isDemo: false,
      ...payload,
    });
    console.log(`[generate] 200 en ${Date.now() - started} ms`);
  } catch (err) {
    if (err instanceof GenerationError) {
      console.error(`[generate] ${err.status} — ${err.message}`);
      sendJson(res, err.status, { error: err.message, retryable: err.retryable });
      return;
    }
    // On ne renvoie jamais le detail interne au client : il pourrait contenir
    // des elements de configuration.
    console.error('[generate] erreur inattendue', err);
    sendJson(res, 500, { error: 'Erreur interne.', retryable: true });
  }
};

const server = createServer((req, res) => {
  applyCors(req, res, cfg);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
  if (req.method === 'GET' && req.url === '/health') {
    sendJson(res, 200, { ok: true, model: cfg.model });
    return;
  }
  if (req.method === 'POST' && req.url === '/generate') {
    void handleGenerate(req, res);
    return;
  }
  sendJson(res, 404, { error: 'Route inconnue.' });
});

server.listen(cfg.port, () => {
  console.log(`Suno Maestro — proxy IA sur http://localhost:${cfg.port}`);
  console.log(`Modele : ${cfg.model}`);
  console.log(
    cfg.allowedOrigins.length
      ? `Origines autorisees : ${cfg.allowedOrigins.join(', ')}`
      : 'ATTENTION : aucune origine restreinte (ALLOWED_ORIGINS vide) — developpement seulement.',
  );
  if (!cfg.clientToken) console.log('ATTENTION : CLIENT_TOKEN vide — aucune authentification client.');
});

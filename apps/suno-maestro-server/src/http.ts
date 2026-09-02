import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Config } from './config.ts';

const MAX_BODY_BYTES = 64 * 1024;

export const readJson = async (req: IncomingMessage): Promise<unknown> => {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of req) {
    const buf = chunk as Buffer;
    size += buf.length;
    if (size > MAX_BODY_BYTES) throw new Error('Corps de requete trop volumineux.');
    chunks.push(buf);
  }
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
};

export const applyCors = (req: IncomingMessage, res: ServerResponse, cfg: Config): void => {
  const origin = req.headers.origin;
  if (cfg.allowedOrigins.length === 0) {
    // Aucune liste configuree : ouvert. Acceptable en developpement seulement.
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else if (origin && cfg.allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');
};

export const sendJson = (res: ServerResponse, status: number, body: unknown): void => {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
    'Cache-Control': 'no-store',
  });
  res.end(payload);
};

/** Seau a jetons par IP. Suffisant pour un proxy personnel ; pas pour un service public. */
export const createRateLimiter = (perMinute: number) => {
  const buckets = new Map<string, { tokens: number; last: number }>();

  return (ip: string): boolean => {
    const now = Date.now();
    const b = buckets.get(ip) ?? { tokens: perMinute, last: now };
    const refill = ((now - b.last) / 60_000) * perMinute;
    b.tokens = Math.min(perMinute, b.tokens + refill);
    b.last = now;

    if (b.tokens < 1) {
      buckets.set(ip, b);
      return false;
    }
    b.tokens -= 1;
    buckets.set(ip, b);

    // Purge tres simple pour eviter une fuite memoire sur un long uptime.
    if (buckets.size > 5000) {
      for (const [k, v] of buckets) if (now - v.last > 600_000) buckets.delete(k);
    }
    return true;
  };
};

export const clientIp = (req: IncomingMessage): string => {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length) return (fwd.split(',')[0] ?? '').trim() || 'inconnu';
  return req.socket.remoteAddress ?? 'inconnu';
};

/** Compare deux jetons sans fuite de temps exploitable. */
export const safeEqual = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
};

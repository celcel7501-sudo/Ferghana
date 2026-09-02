import type { AiProvider } from './types';
import { AiError } from './types';
import type { GenerationRequest, GenerationResult } from '@/types';
import { SYSTEM_RULES, briefToPrompt, refineInstruction, scopeInstruction } from './prompts';
import { measure } from '@/domain/sunoFields';
import { hookVerseRatio } from '@/domain/ratio';

const TIMEOUT_MS = 45_000;

/**
 * Appelle VOTRE serveur, jamais un fournisseur IA directement.
 * Aucune cle secrete ne transite par l'application : le serveur detient la cle
 * et se charge de l'appel au modele.
 */
export const createRemoteProvider = (baseUrl: string): AiProvider => ({
  id: 'remote',
  isDemo: false,

  async generate(req: GenerationRequest, onProgress): Promise<GenerationResult> {
    onProgress?.('Connexion au serveur…');

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const res = await fetch(`${baseUrl.replace(/\/$/, '')}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          system: SYSTEM_RULES,
          scope: scopeInstruction(req.scope),
          refine: req.refine ? refineInstruction(req.refine) : null,
          brief: briefToPrompt(req.brief),
          raw: req.brief,
        }),
      });

      if (!res.ok) {
        throw new AiError(
          `Le serveur a répondu ${res.status}.`,
          res.status >= 500 ? 'server' : 'invalid',
          res.status >= 500 || res.status === 429,
        );
      }

      onProgress?.('Lecture de la réponse…');
      const data = (await res.json()) as Partial<GenerationResult>;

      if (!data.stylePrompt || !data.lyrics) {
        throw new AiError('Réponse incomplète du serveur.', 'invalid', false);
      }

      // Les mesures sont toujours recalculees localement : on ne fait jamais
      // confiance a un compteur distant pour une contrainte dure.
      const stylePrompt = data.stylePrompt;
      const lyrics = data.lyrics;
      const excludeBlock = data.excludeBlock ?? '';

      return {
        ...(data as GenerationResult),
        isDemo: false,
        budget: measure(stylePrompt, lyrics, excludeBlock),
        hookVerseRatio: hookVerseRatio(lyrics),
      };
    } catch (err) {
      if (err instanceof AiError) throw err;
      if (err instanceof Error && err.name === 'AbortError') {
        throw new AiError('Le serveur met trop de temps à répondre.', 'timeout', true);
      }
      throw new AiError('Connexion impossible. Vérifiez votre réseau.', 'network', true);
    } finally {
      clearTimeout(timer);
    }
  },
});

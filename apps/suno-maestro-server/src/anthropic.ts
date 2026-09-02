import Anthropic from '@anthropic-ai/sdk';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import type { Config } from './config.ts';
import { GenerationPayload } from './schema.ts';
import { SYSTEM_PROMPT, buildUserPrompt } from './prompt.ts';

export class GenerationError extends Error {
  // Champs declares puis assignes : les proprietes de parametre ne sont pas une
  // syntaxe effacable, et Node les refuse en mode strip-only.
  readonly status: number;
  readonly retryable: boolean;

  constructor(message: string, status: number, retryable: boolean) {
    super(message);
    this.name = 'GenerationError';
    this.status = status;
    this.retryable = retryable;
  }
}

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export const createGenerator = (cfg: Config) => {
  const client = new Anthropic({ apiKey: cfg.apiKey });

  const callOnce = async (input: {
    brief: string;
    scope?: string | undefined;
    refine?: string | null | undefined;
  }): Promise<GenerationPayload> => {
    const response = await client.messages.parse({
      model: cfg.model,
      max_tokens: cfg.maxTokens,
      thinking: { type: 'adaptive' },
      output_config: {
        effort: 'high',
        format: zodOutputFormat(GenerationPayload),
      },
      system: [
        // Le prompt systeme est fige : c'est ce qui rend le cache utile.
        { type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } },
      ],
      messages: [{ role: 'user', content: buildUserPrompt(input) }],
    });

    if (response.stop_reason === 'refusal') {
      throw new GenerationError(
        "Le modele a decline cette demande. Reformulez le brief sans reference a une oeuvre existante.",
        422,
        false,
      );
    }
    if (response.stop_reason === 'max_tokens') {
      throw new GenerationError('Reponse tronquee par la limite de jetons.', 502, true);
    }
    if (!response.parsed_output) {
      throw new GenerationError('Le modele n a pas renvoye la structure attendue.', 502, true);
    }
    return response.parsed_output;
  };

  /** Trois tentatives, recul exponentiel, uniquement sur les erreurs rejouables. */
  return async (input: {
    brief: string;
    scope?: string | undefined;
    refine?: string | null | undefined;
  }): Promise<GenerationPayload> => {
    const delays = [0, 1200, 3600];
    let last: unknown;

    for (const delay of delays) {
      if (delay) await sleep(delay);
      try {
        return await callOnce(input);
      } catch (err) {
        last = err;

        if (err instanceof GenerationError) {
          if (!err.retryable) throw err;
          continue;
        }
        // Chaine du plus specifique au plus general.
        if (err instanceof Anthropic.BadRequestError) {
          throw new GenerationError(`Requete invalide : ${err.message}`, 400, false);
        }
        if (err instanceof Anthropic.AuthenticationError) {
          throw new GenerationError('Cle du fournisseur invalide ou expiree.', 500, false);
        }
        if (err instanceof Anthropic.PermissionDeniedError) {
          throw new GenerationError('Acces refuse par le fournisseur.', 500, false);
        }
        if (err instanceof Anthropic.RateLimitError) {
          continue;
        }
        if (err instanceof Anthropic.APIConnectionError) {
          continue;
        }
        if (err instanceof Anthropic.APIError) {
          if (err.status && err.status >= 500) continue;
          throw new GenerationError(`Erreur fournisseur ${err.status}.`, 502, false);
        }
        throw err;
      }
    }

    const detail = last instanceof Error ? last.message : 'cause inconnue';
    throw new GenerationError(`Echec apres trois tentatives : ${detail}`, 503, true);
  };
};

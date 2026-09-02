import type { GenerationRequest, GenerationResult } from '@/types';

export interface AiProvider {
  readonly id: 'demo' | 'remote';
  /** true si les resultats sont simules localement. */
  readonly isDemo: boolean;
  generate(req: GenerationRequest, onProgress?: (step: string) => void): Promise<GenerationResult>;
}

export class AiError extends Error {
  constructor(
    message: string,
    readonly kind: 'network' | 'server' | 'invalid' | 'timeout',
    readonly retryable: boolean,
  ) {
    super(message);
    this.name = 'AiError';
  }
}

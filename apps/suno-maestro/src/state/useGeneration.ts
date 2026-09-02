import { useCallback, useRef, useState } from 'react';
import type { GenerationRequest, GenerationResult } from '@/types';
import { aiProvider, AiError } from '@/services/ai/client';

export interface GenerationState {
  running: boolean;
  step: string;
  error: string | null;
  retryable: boolean;
  result: GenerationResult | null;
}

const INITIAL: GenerationState = {
  running: false,
  step: '',
  error: null,
  retryable: false,
  result: null,
};

export const useGeneration = () => {
  const [state, setState] = useState<GenerationState>(INITIAL);
  const inFlight = useRef(false);

  const run = useCallback(async (req: GenerationRequest): Promise<GenerationResult | null> => {
    if (inFlight.current) return null;
    inFlight.current = true;
    setState({ ...INITIAL, running: true, step: 'Préparation…' });

    try {
      const result = await aiProvider.generate(req, (step) =>
        setState((s) => ({ ...s, step })),
      );
      setState({ running: false, step: '', error: null, retryable: false, result });
      return result;
    } catch (err) {
      const isAi = err instanceof AiError;
      setState({
        running: false,
        step: '',
        error: isAi ? err.message : 'Une erreur inattendue est survenue.',
        retryable: isAi ? err.retryable : true,
        result: null,
      });
      return null;
    } finally {
      inFlight.current = false;
    }
  }, []);

  const reset = useCallback(() => setState(INITIAL), []);

  return { ...state, run, reset };
};

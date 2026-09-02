import type { AiProvider } from './types';
import { demoProvider } from './demoProvider';
import { createRemoteProvider } from './remoteProvider';

/**
 * EXPO_PUBLIC_AI_BASE_URL est une variable PUBLIQUE : elle ne contient qu'une
 * URL, jamais une cle. Si elle est vide, l'application bascule en mode demo et
 * l'indique clairement dans l'interface.
 */
const baseUrl = process.env.EXPO_PUBLIC_AI_BASE_URL?.trim() ?? '';

export const aiProvider: AiProvider = baseUrl ? createRemoteProvider(baseUrl) : demoProvider;

export const isDemoMode = (): boolean => aiProvider.isDemo;
export const aiEndpointConfigured = (): boolean => baseUrl.length > 0;

export { AiError } from './types';
export type { AiProvider } from './types';

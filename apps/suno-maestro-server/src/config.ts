/** Configuration lue une seule fois au demarrage, et validee bruyamment. */

const int = (v: string | undefined, fallback: number): number => {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

export interface Config {
  port: number;
  apiKey: string;
  allowedOrigins: string[];
  clientToken: string | null;
  model: string;
  maxTokens: number;
  requestsPerMinute: number;
}

export const loadConfig = (): Config => {
  const apiKey = process.env.ANTHROPIC_API_KEY?.trim() ?? '';
  if (!apiKey) {
    throw new Error(
      'ANTHROPIC_API_KEY manquante. Le serveur ne peut pas demarrer sans elle — ' +
        "c'est lui, et lui seul, qui detient la cle du fournisseur.",
    );
  }
  return {
    port: int(process.env.PORT, 8787),
    apiKey,
    allowedOrigins: (process.env.ALLOWED_ORIGINS ?? '')
      .split(',')
      .map((o) => o.trim())
      .filter(Boolean),
    clientToken: process.env.CLIENT_TOKEN?.trim() || null,
    // Modele impose par le projet. Ne pas le degrader pour economiser :
    // c'est une decision de produit, pas une decision technique.
    model: 'claude-opus-5',
    maxTokens: 16000,
    requestsPerMinute: int(process.env.RATE_LIMIT_RPM, 20),
  };
};

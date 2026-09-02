// Le helper zodOutputFormat du SDK cible zod v4 ; on importe le meme
// sous-chemin pour que les types coincident.
import * as z from 'zod/v4';

/**
 * Miroir exact de `GenerationResult` cote application, moins `budget` et
 * `hookVerseRatio` : ces deux-la sont RECALCULES par l'application. Une
 * contrainte dure ne se delegue pas a un compteur distant.
 */

export const ArtisticDirection = z.object({
  workingTitle: z.string(),
  theme: z.string(),
  emotion: z.string(),
  energy: z.string(),
  audience: z.string(),
  sonicIdentity: z.string(),
  chorusIntent: z.string(),
});

export const SongSection = z.object({
  tag: z.string(),
  role: z.string(),
  bars: z.number().int().min(1).max(64),
});

export const ChorusVariants = z.object({
  radio: z.string(),
  rap: z.string(),
  melodic: z.string(),
});

export const ProductionNotes = z.object({
  drums: z.string(),
  bass: z.string(),
  instruments: z.string(),
  choirs: z.string(),
  effects: z.string(),
  scratches: z.string(),
  arrangement: z.string(),
});

export const SunoAdvice = z.object({
  keep: z.array(z.string()),
  regenerate: z.array(z.string()),
  ifWeakChorus: z.array(z.string()),
});

export const GenerationPayload = z.object({
  direction: ArtisticDirection,
  /** Champ "Style of Music", anglais, 1000 caracteres maximum, sans paroles. */
  stylePrompt: z.string().max(1000),
  /** Tags negatifs pour le champ dedie Exclude Styles. */
  excludeBlock: z.string().max(400),
  structure: z.array(SongSection).min(4).max(20),
  /** Paroles francaises balisees, 5000 caracteres maximum. */
  lyrics: z.string().max(5000),
  hook: z.string(),
  variants: ChorusVariants,
  production: ProductionNotes,
  vocalDirection: z.array(z.string()).min(1),
  advice: SunoAdvice,
});

export type GenerationPayload = z.infer<typeof GenerationPayload>;

/** Corps accepte sur POST /generate. */
export const GenerateRequest = z.object({
  system: z.string().optional(),
  scope: z.string().optional(),
  refine: z.string().nullable().optional(),
  brief: z.string().min(1),
  raw: z.record(z.string(), z.unknown()).optional(),
});

export type GenerateRequest = z.infer<typeof GenerateRequest>;

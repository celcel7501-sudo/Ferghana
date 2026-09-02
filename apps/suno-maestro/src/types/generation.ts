import type { Brief } from './brief';

/** Ce que l'utilisateur choisit de generer. */
export type GenerationScope =
  | 'prompt'
  | 'lyrics'
  | 'hook'
  | 'structure'
  | 'vocal'
  | 'production'
  | 'full';

export interface ArtisticDirection {
  workingTitle: string;
  theme: string;
  emotion: string;
  energy: string;
  audience: string;
  sonicIdentity: string;
  chorusIntent: string;
}

export interface SongSection {
  tag: string;
  role: string;
  bars: number;
}

export interface ChorusVariants {
  radio: string;
  rap: string;
  melodic: string;
}

export interface ProductionNotes {
  drums: string;
  bass: string;
  instruments: string;
  choirs: string;
  effects: string;
  scratches: string;
  arrangement: string;
}

export interface SunoAdvice {
  keep: string[];
  regenerate: string[];
  ifWeakChorus: string[];
}

/** Mesures des champs Suno, calculees et jamais estimees. */
export interface FieldBudget {
  styleChars: number;
  styleLimit: number;
  lyricsChars: number;
  lyricsLimit: number;
  excludeChars: number;
  /** Total si le bloc d'exclusion est recolle au style (mode repli). */
  styleWithExclude: number;
  fallbackPossible: boolean;
}

export interface GenerationResult {
  id: string;
  createdAt: string;
  scope: GenerationScope;
  /** true = produit par le generateur local de demonstration. */
  isDemo: boolean;
  direction: ArtisticDirection;
  /** Prompt "Style of Music", en anglais, sans paroles. */
  stylePrompt: string;
  /** Bloc de tags negatifs, a coller dans Exclude Styles. */
  excludeBlock: string;
  structure: SongSection[];
  lyrics: string;
  hook: string;
  variants: ChorusVariants;
  production: ProductionNotes;
  vocalDirection: string[];
  advice: SunoAdvice;
  budget: FieldBudget;
  /** Ratio hook / couplets, mesure section par section. */
  hookVerseRatio: number;
}

export type RefineAction =
  | 'regenerate'
  | 'better_chorus'
  | 'more_commercial'
  | 'more_rap'
  | 'more_melodic'
  | 'add_break';

export interface GenerationRequest {
  brief: Brief;
  scope: GenerationScope;
  refine?: RefineAction;
  previous?: GenerationResult;
}

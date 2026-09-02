/** Tout ce que l'utilisateur decrit avant generation. */

export type EnergyLevel = 1 | 2 | 3 | 4 | 5;

/** Proportion rap / chant, en pourcentage de rap (0 = tout chante, 100 = tout rappe). */
export type RapRatio = number;

export type VoiceType =
  | 'tenor'
  | 'baryton'
  | 'basse'
  | 'alto_f'
  | 'soprano_f'
  | 'duo_mf'
  | 'choeur';

export type Language = 'fr' | 'en' | 'fr_en';

export interface StyleFamily {
  id: string;
  label: string;
  /** Descripteurs techniques anglais injectes dans le prompt de style. */
  tags: string[];
  /** Fourchette de tempo typique, utilisee pour pre-remplir le curseur. */
  bpm: [number, number];
  emoji: string;
}

export interface Brief {
  title: string;
  /** L'histoire ou le message a raconter. */
  story: string;
  emotion: string;
  styleId: string;
  /** Epoque ou influence generale, en clair (jamais un nom d'artiste dans le prompt). */
  era: string;
  bpm: number;
  voice: VoiceType;
  language: Language;
  energy: EnergyLevel;
  rapRatio: RapRatio;
  instruments: string[];
  choirs: boolean;
  scratches: boolean;
  /** Mots ou images a integrer imperativement. */
  keywords: string[];
  /** Ce qu'il faut eviter (alimente le bloc d'exclusion). */
  avoid: string[];
}

export const emptyBrief = (): Brief => ({
  title: '',
  story: '',
  emotion: '',
  styleId: 'rap_fr',
  era: '',
  bpm: 95,
  voice: 'tenor',
  language: 'fr',
  energy: 3,
  rapRatio: 60,
  instruments: [],
  choirs: true,
  scratches: false,
  keywords: [],
  avoid: [],
});

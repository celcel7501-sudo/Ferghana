import type { EnergyLevel, Language, VoiceType } from '@/types';

export const EMOTIONS = [
  'Fierté', 'Nostalgie', 'Colère froide', 'Espoir', 'Mélancolie',
  'Euphorie', 'Tendresse', 'Détermination', 'Regret', 'Insouciance',
] as const;

export const ERAS = [
  'Intemporel', 'Années 80', 'Années 90', 'Années 2000', 'Contemporain', 'Futuriste',
] as const;

export const VOICES: { id: VoiceType; label: string; tag: string }[] = [
  { id: 'tenor', label: 'Ténor (homme, aigu)', tag: 'male lead, high tenor' },
  { id: 'baryton', label: 'Baryton (homme, chaud)', tag: 'male lead, deep warm baritone' },
  { id: 'basse', label: 'Basse (homme, grave)', tag: 'male lead, deep bass voice' },
  { id: 'alto_f', label: 'Alto (femme, chaude)', tag: 'female lead, warm alto' },
  { id: 'soprano_f', label: 'Soprano (femme, aiguë)', tag: 'female lead, bright soprano' },
  { id: 'duo_mf', label: 'Duo homme / femme', tag: 'male and female duo, two distinct singers' },
  { id: 'choeur', label: 'Chœur en avant', tag: 'group lead vocals, full choir forward' },
];

export const voiceTag = (id: VoiceType): string =>
  VOICES.find((v) => v.id === id)?.tag ?? 'male lead, high tenor';

export const LANGUAGES: { id: Language; label: string; tag: string }[] = [
  { id: 'fr', label: 'Français', tag: 'sung in French' },
  { id: 'en', label: 'Anglais', tag: 'sung in English' },
  { id: 'fr_en', label: 'Français + anglais', tag: 'sung in French with occasional English lines' },
];

export const languageTag = (id: Language): string =>
  LANGUAGES.find((l) => l.id === id)?.tag ?? 'sung in French';

export const ENERGY_LABELS: Record<EnergyLevel, string> = {
  1: 'Intime',
  2: 'Posé',
  3: 'Équilibré',
  4: 'Puissant',
  5: 'Explosif',
};

export const ENERGY_TAGS: Record<EnergyLevel, string> = {
  1: 'intimate and restrained, preserved dynamics',
  2: 'laid-back and warm, unhurried',
  3: 'balanced and confident',
  4: 'powerful and driving, anthemic',
  5: 'explosive and euphoric, maximum energy',
};

export const INSTRUMENTS = [
  'Piano', 'Rhodes', 'Orgue', 'Cordes', 'Cuivres', 'Trompette bouchée',
  'Guitare', 'Basse fretless', 'Contrebasse', 'Synthé', 'Percussions', 'Chœur gospel',
] as const;

export const INSTRUMENT_TAGS: Record<string, string> = {
  Piano: 'dark melancholic piano loop',
  Rhodes: 'warm Rhodes chords',
  Orgue: 'gospel organ pad',
  Cordes: 'cinematic minor-key strings',
  Cuivres: 'dark brass stabs',
  'Trompette bouchée': 'muted trumpet answer',
  Guitare: 'bright plucked guitar line',
  'Basse fretless': 'deep melodic jazz-fusion bass with fretless slides',
  Contrebasse: 'walking upright bass',
  Synthé: 'tight muted synth arpeggio',
  Percussions: 'shakers, rim clicks and conga fills',
  'Chœur gospel': 'gospel-tinged backing choir',
};

/** Exclusions proposees par defaut, sans contradiction avec les tags positifs usuels. */
export const DEFAULT_EXCLUDES = [
  'no mumble rap',
  'no distorted vocals',
  'no generic EDM',
  'avoid messy mix',
  'no cluttered low end',
  'avoid thin sounds',
] as const;

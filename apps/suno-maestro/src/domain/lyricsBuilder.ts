import type { Brief, SongSection } from '@/types';

/**
 * Squelette de sections. Le nombre de mesures sert a estimer la duree :
 * secondes = mesures * 4 * 60 / BPM.
 */
export const buildStructure = (brief: Brief): SongSection[] => {
  const dense = brief.rapRatio >= 60;
  const sections: SongSection[] = [
    { tag: '[Intro]', role: brief.scratches ? 'Scratches, ambiance, mise en place' : 'Ambiance, mise en place', bars: 8 },
    { tag: '[Couplet 1]', role: dense ? 'Flow articulé, pose du décor' : 'Chanté-parlé, pose du décor', bars: 16 },
    { tag: '[Pré-refrain]', role: 'Montée, harmonies qui entrent', bars: 4 },
    { tag: '[Refrain]', role: 'Hook chanté, appel-réponse', bars: 8 },
    { tag: '[Post-refrain]', role: 'Réponses de groupe, respiration', bars: 4 },
    { tag: '[Couplet 2]', role: dense ? 'Flow plus dense, montée d’enjeu' : 'Plus libre, plus haut', bars: 16 },
    { tag: '[Pré-refrain]', role: 'Montée doublée', bars: 4 },
    { tag: '[Refrain]', role: 'Hook, harmonies élargies', bars: 8 },
    { tag: '[Post-refrain]', role: 'Réponses de groupe', bars: 4 },
    { tag: '[Pont]', role: 'Rupture : instrumentation réduite, voix nue', bars: 8 },
    { tag: '[Break]', role: 'Une mesure de vide attribuée à un seul instrument', bars: 2 },
    { tag: '[Refrain]', role: 'Toutes les voix, champ le plus large', bars: 8 },
    { tag: '[Outro]', role: brief.scratches ? 'Scratches, backspin, dernière phrase' : 'Descente, dernière phrase', bars: 8 },
  ];
  return sections;
};

export const estimateSeconds = (sections: SongSection[], bpm: number): number =>
  Math.round(sections.reduce((n, s) => n + s.bars, 0) * 4 * (60 / bpm));

export const formatDuration = (seconds: number): string =>
  `${Math.floor(seconds / 60)} min ${String(seconds % 60).padStart(2, '0')}`;

/* ------------------------------------------------------------------ */
/* Generateur de demonstration                                         */
/* ------------------------------------------------------------------ */

/**
 * Compose un texte ORIGINAL a partir des seules entrees de l'utilisateur.
 * C'est un moteur de gabarits : il assemble le theme, les mots-cles et
 * l'emotion fournis. Il ne contient aucun texte d'oeuvre existante, et la
 * couche de production (remoteProvider) applique la meme regle cote serveur.
 */

const pick = <T,>(arr: readonly T[], seed: number): T =>
  arr[Math.abs(seed) % arr.length] as T;

const hash = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i += 1) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h;
};

const OPENERS = [
  'On en parlait jamais, et pourtant tout le monde savait',
  'J’ai gardé la date dans un coin de la tête',
  'Y’a des choses qu’on range et qu’on jette pas',
  'Personne m’a prévenu que ça irait si vite',
];

const PIVOTS = [
  'Et si je te le dis maintenant, c’est que j’ai plus le temps d’attendre',
  'C’est pas une plainte, c’est un constat, et j’ai appris à faire la différence',
  'On a mis dix ans à comprendre ce qui tenait en une phrase',
  'Le reste, ça se remplace ; ça, non',
];

const CLOSERS = [
  'Alors je le dis une fois, proprement, et j’arrête',
  'Le reste, tu le sais déjà — et tant mieux',
  'Et je referme la porte sans claquer',
  'On verra demain. Ce soir, ça suffit',
];

export interface DemoLyricsInput {
  brief: Brief;
  hook: string;
}

/** Genere un couplet de huit vers a partir du brief. */
const verse = (brief: Brief, seed: number, keywords: string[]): string => {
  const kw = keywords.length ? keywords : ['la nuit', 'la porte', 'le silence'];
  const k = (i: number) => kw[i % kw.length] as string;
  return [
    `${pick(OPENERS, seed)},`,
    `${brief.emotion ? brief.emotion.toLowerCase() : 'le calme'} dans la voix et ${k(0)} dans la tête.`,
    `J’ai compté les jours comme on compte la monnaie,`,
    `Et j’ai jamais su dire ce que ${k(1)} me faisait.`,
    `${pick(PIVOTS, seed + 7)}.`,
    `On avait dit qu’on parlerait, on a parlé de ${k(2)},`,
    `Vingt minutes pour rien, et le vrai sujet debout derrière la porte.`,
    `${pick(CLOSERS, seed + 13)}.`,
  ].join('\n');
};

export const buildDemoLyrics = ({ brief, hook }: DemoLyricsInput): string => {
  const seed = hash(brief.title + brief.story + brief.emotion);
  const kw = brief.keywords.filter(Boolean);
  const voiceTagFr = brief.voice.startsWith('alto') || brief.voice.startsWith('soprano')
    ? 'voix féminine'
    : brief.voice === 'duo_mf'
      ? 'duo'
      : 'ténor';

  const chorusTag = `[Refrain – ${voiceTagFr} puissant, chœurs en appel-réponse]`;
  const introTag = brief.scratches
    ? '[Intro – scratches, crépitement de vinyle, voix parlée proche]'
    : '[Intro – nappe seule, voix parlée proche]';

  const post = [
    '[Post-refrain – réponses de groupe, panoramique]',
    `(Call: ${hook.split(',')[0] ?? hook}) Response: [Chœurs: ${hook.split(',')[0] ?? hook}]`,
    `(Call: ${hook.split(',')[0] ?? hook}) Response: [Chœurs: ${hook.split(',')[0] ?? hook}]`,
  ].join('\n');

  return [
    introTag,
    '(parlé, bas, très proche du micro)',
    brief.title ? `${brief.title}.` : 'On y est.',
    kw[0] ? `${kw[0]}. Et le reste après.` : 'Et le reste après.',
    '',
    '[Couplet 1 – flow posé, en arrière du tempo]',
    verse(brief, seed, kw),
    '',
    '[Pré-refrain – montée, harmonies qui entrent]',
    'J’ai pas de plan, j’ai pas de phrase,',
    'J’ai pas répété devant la glace.',
    'Je pose la question et je me tais,',
    'Trois, deux, un —',
    '',
    chorusTag,
    hook,
    '',
    post,
    '',
    '[Couplet 2 – plus dense, plus haut, basse en avant]',
    verse(brief, seed + 101, kw.slice().reverse()),
    '',
    '[Pré-refrain – montée doublée, cordes plus hautes]',
    'J’ai pas de plan, j’ai pas de phrase,',
    'J’ai pas répété devant la glace.',
    'Je pose la question et je me tais,',
    'Trois, deux, un —',
    '',
    chorusTag,
    hook,
    '',
    post,
    '',
    '[Pont – instrumentation réduite, voix presque parlée, sans réverbération]',
    '(voix nue, sans double)',
    kw[1] ? `${kw[1]}, c’est tout ce qui reste quand on éteint.` : 'C’est tout ce qui reste quand on éteint.',
    'Réponds pas tout de suite. Prends la nuit.',
    '',
    '[Break – une mesure, la basse seule, la batterie revient entière]',
    '',
    `[Refrain final – toutes les voix, champ le plus large]`,
    hook,
    '',
    post,
    '',
    brief.scratches
      ? '[Outro – scratches, backspin, dernière phrase répétée]'
      : '[Outro – batterie coupée, dernière phrase répétée]',
    '(parlé, doux)',
    `${kw[0] ?? (brief.title || 'Voilà')}.`,
    'C’est tout ce que je voulais dire.',
  ].join('\n');
};

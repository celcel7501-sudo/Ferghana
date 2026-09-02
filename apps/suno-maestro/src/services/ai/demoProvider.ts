import type { AiProvider } from './types';
import type {
  ArtisticDirection, ChorusVariants, GenerationRequest, GenerationResult,
  ProductionNotes, SunoAdvice,
} from '@/types';
import { buildStylePrompt, buildExcludeBlock } from '@/domain/styleBuilder';
import { buildStructure, buildDemoLyrics, estimateSeconds, formatDuration } from '@/domain/lyricsBuilder';
import { measure, trimLyricsToBudget } from '@/domain/sunoFields';
import { hookVerseRatio } from '@/domain/ratio';
import { styleById } from '@/data/styles';
import { ENERGY_LABELS } from '@/data/options';

const uid = (): string => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** Hook original compose a partir du theme et des mots-cles fournis. */
const buildHook = (req: GenerationRequest): string => {
  const { brief } = req;
  const subject = (brief.keywords[0] ?? brief.title ?? 'ce soir').trim();
  const emotion = (brief.emotion || 'maintenant').toLowerCase();

  const melodic = req.refine === 'more_melodic';
  const rap = req.refine === 'more_rap';

  if (rap) {
    return [
      `${subject}, on compte pas pareil,`,
      `${subject}, on parle pas pareil,`,
      `Tu peux vérifier, demande autour,`,
      `${subject}, on compte pas pareil.`,
    ].join('\n');
  }
  if (melodic) {
    return [
      `Dis-moi si ${subject} tient encore,`,
      `Dis-moi si t’as le cœur qui suit,`,
      `Moi j’ai plus rien à te prouver,`,
      `Dis-moi si ${subject} tient encore.`,
    ].join('\n');
  }
  return [
    `Garde ${subject} pour toi,`,
    `Moi j’ai gardé le ${emotion},`,
    `On s’était dit qu’on dirait rien,`,
    `Garde ${subject} pour toi.`,
  ].join('\n');
};

const buildVariants = (hook: string): ChorusVariants => {
  const first = hook.split('\n')[0] ?? hook;
  return {
    radio: [first, first, 'Et tout le monde chante avec,', first].join('\n'),
    rap: [first.replace(/,$/, ' —'), 'Répète après moi, une fois,', 'Répète après moi, deux fois,', first].join('\n'),
    melodic: [first, 'Laisse la phrase finir toute seule,', 'J’ai plus besoin de la finir,', first].join('\n'),
  };
};

const buildDirection = (req: GenerationRequest): ArtisticDirection => {
  const { brief } = req;
  const fam = styleById(brief.styleId);
  return {
    workingTitle: brief.title || 'Sans titre',
    theme: brief.story || 'Thème libre',
    emotion: brief.emotion || 'Ambivalente',
    energy: `${ENERGY_LABELS[brief.energy]} (${brief.energy}/5)`,
    audience: brief.rapRatio >= 60 ? 'Auditeurs rap, playlists urbaines' : 'Playlists R&B et pop urbaine',
    sonicIdentity: `${fam.label} à ${brief.bpm} BPM${brief.scratches ? ', platines présentes' : ''}${brief.choirs ? ', harmonies empilées' : ''}`,
    chorusIntent: 'Une phrase courte, littérale, quatre lignes de même longueur syllabique.',
  };
};

const buildProduction = (req: GenerationRequest): ProductionNotes => {
  const { brief } = req;
  return {
    drums: `${brief.bpm} BPM. Kick et caisse claire au centre, mono. ${brief.bpm < 100 ? 'Charleys serrés, claps sur le contretemps.' : 'Charleys en doubles-croches, claps empilés.'}`,
    bass: brief.instruments.includes('Basse fretless')
      ? 'Basse fretless, glissandos vers la fondamentale en fin de cycle.'
      : 'Basse ronde, mono, calée sur le kick, jamais devant la voix.',
    instruments: brief.instruments.length ? brief.instruments.join(', ') : 'Piano, nappe, basse.',
    choirs: brief.choirs
      ? 'Harmonies ouvertes à ±60 %, réponses de groupe plus larges que le refrain.'
      : 'Pas de chœur : la voix lead reste seule et sèche.',
    effects: 'Lead au centre, sec. Réverbération réservée aux chœurs et aux réponses.',
    scratches: brief.scratches
      ? 'Stab scratché utilisé comme riff, jamais comme solo. Une seule routine complète.'
      : 'Aucun élément de platine.',
    arrangement: 'Une couche neuve par cycle : cordes au premier pré-refrain, cuivres au deuxième, chœur au troisième.',
  };
};

const buildAdvice = (styleChars: number, fallbackPossible: boolean): SunoAdvice => ({
  keep: [
    'La ligne de persistance : c’est elle qui empêche le motif d’être abandonné.',
    'La phrase de batterie : elle porte le tempo et la subdivision.',
    'La consigne de régularité du refrain.',
  ],
  regenerate: [
    'Si le refrain sort chanté sur quatre mélodies différentes, relancer en gardant le style.',
    'Si les couplets se mettent à chanter, ajouter « rapped verses, sung chorus, never the reverse ».',
  ],
  ifWeakChorus: [
    'Vérifier que les quatre lignes ont le même nombre de syllabes.',
    'Retirer toute image du refrain : il doit rester littéral.',
    fallbackPossible
      ? `Il reste ${1000 - styleChars} caractères pour renforcer un levier.`
      : 'Le bloc d’exclusion doit aller dans le champ dédié : le mode replié ne tient pas.',
  ],
});

export const demoProvider: AiProvider = {
  id: 'demo',
  isDemo: true,

  async generate(req, onProgress): Promise<GenerationResult> {
    const steps = [
      'Lecture du brief…',
      'Direction artistique…',
      'Assemblage du prompt de style…',
      'Écriture du hook…',
      'Écriture des couplets…',
      'Mesure des champs Suno…',
    ];
    for (const s of steps) {
      onProgress?.(s);
      await sleep(220);
    }

    const stylePrompt = buildStylePrompt(req.brief);
    const excludeBlock = buildExcludeBlock(req.brief, stylePrompt);
    const hook = buildHook(req);
    const lyrics = trimLyricsToBudget(buildDemoLyrics({ brief: req.brief, hook }));
    const structure = buildStructure(req.brief);
    const budget = measure(stylePrompt, lyrics, excludeBlock);

    return {
      id: uid(),
      createdAt: new Date().toISOString(),
      scope: req.scope,
      isDemo: true,
      direction: buildDirection(req),
      stylePrompt,
      excludeBlock,
      structure,
      lyrics,
      hook,
      variants: buildVariants(hook),
      production: buildProduction(req),
      vocalDirection: [
        'Couplets : proche du micro, en arrière du tempo, articulé.',
        'Refrain : pleinement chanté, doublé, sans monter en agressivité.',
        'Ad-libs après les fins de vers, jamais pendant.',
        'Pont : voix nue, sans double, sans réverbération.',
        `Durée estimée : ${formatDuration(estimateSeconds(structure, req.brief.bpm))}.`,
      ],
      advice: buildAdvice(budget.styleChars, budget.fallbackPossible),
      budget,
      hookVerseRatio: hookVerseRatio(lyrics),
    };
  },
};

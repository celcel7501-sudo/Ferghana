import type { StyleFamily } from '@/types';

/**
 * Les familles de style proposees comme selecteurs visuels.
 * `tags` ne contient QUE des descripteurs techniques : jamais un nom d'artiste,
 * de groupe ou de label. C'est une regle produit, pas une preference.
 */
export const STYLE_FAMILIES: StyleFamily[] = [
  {
    id: 'rap_fr',
    label: 'Rap français',
    emoji: '🎤',
    bpm: [85, 100],
    tags: ['French rap', 'hard-hitting drums', 'dark melodic piano', 'articulate delivery'],
  },
  {
    id: 'hiphop_old',
    label: 'Hip-hop old school',
    emoji: '📻',
    bpm: [90, 100],
    tags: ['Golden Era hip-hop', 'sampled drums', 'dusty sampler grit', 'vinyl crackle'],
  },
  {
    id: 'hiphop_modern',
    label: 'Hip-hop moderne',
    emoji: '🔊',
    bpm: [95, 145],
    tags: ['modern hip-hop', 'crisp programmed drums', 'wide sub bass', 'polished master'],
  },
  {
    id: 'rnb90',
    label: 'R&B 90',
    emoji: '💿',
    bpm: [88, 100],
    tags: ['nineties R&B', 'swung shuffle', 'lush stacked harmonies', 'warm Rhodes'],
  },
  {
    id: 'soul',
    label: 'Soul',
    emoji: '🕯️',
    bpm: [70, 95],
    tags: ['classic soul', 'live drums', 'warm electric piano', 'horn section', 'gospel choir'],
  },
  {
    id: 'funk',
    label: 'Funk',
    emoji: '🪩',
    bpm: [100, 118],
    tags: ['analog funk', 'slap bass', 'clavinet', 'tight rhythm guitar', 'brass stabs'],
  },
  {
    id: 'boom_bap',
    label: 'Boom bap',
    emoji: '🥁',
    bpm: [88, 100],
    tags: ['boom bap', 'MPC-style swung drums', 'filtered soul loop', 'upright bass'],
  },
  {
    id: 'trap_melo',
    label: 'Trap mélodique',
    emoji: '🌫️',
    bpm: [130, 150],
    tags: ['melodic trap', 'deep 808 with pitch glides', 'rolling hi-hats', 'airy synth lead'],
  },
  {
    id: 'pop_urbaine',
    label: 'Pop urbaine',
    emoji: '✨',
    bpm: [100, 120],
    tags: ['urban pop', 'radio-ready chorus', 'bright synths', 'layered claps'],
  },
  {
    id: 'drill_melo',
    label: 'Drill mélodique',
    emoji: '🌘',
    bpm: [138, 146],
    tags: ['melodic drill', 'sliding 808 bass', 'sparse dark piano', 'cold reverb'],
  },
  {
    id: 'afro_urbain',
    label: 'Afro-urbain',
    emoji: '🌍',
    bpm: [100, 115],
    tags: ['afro club', 'three-three-two pattern', 'shakers and congas', 'bright guitar line'],
  },
  {
    id: 'fusion',
    label: 'Fusion perso',
    emoji: '🧪',
    bpm: [90, 125],
    tags: ['genre fusion'],
  },
];

export const styleById = (id: string): StyleFamily =>
  STYLE_FAMILIES.find((s) => s.id === id) ?? (STYLE_FAMILIES[0] as StyleFamily);

export const styleLabel = (id: string): string => styleById(id).label;

import { GENRES, STRUCTURES, VOCALS } from '../data/genres';
import {
  buildAlbum,
  buildDNA,
  buildExclude,
  buildLyrics,
  buildStyle,
  buildTitles,
  lyricsText,
  makeRng,
  seedFrom,
  type LyricBlock,
  type Track,
  type DNA,
} from './engine';

export type GenState = {
  idea: string;
  genreId: string;
  mood: string;
  vocalId: string;
  bpm: number;
  lang: string;
  structureId: string;
  influence: string;
  extras: string;
  keepOwn: boolean;
  ownLyrics: string;
  album: boolean;
  albumCount: number;
  seed: number;
  importedStyle: string;
  importedExclude: string;
  importedName: string;
};

const STYLE_LABELS = ['Genre', 'Tempo', 'Vocal', 'Instrumentation', 'Structure', 'Production'];

export const DEFAULT_STATE: GenState = {
  idea: 'Un album road trip où chaque titre est dédié à un État des États-Unis différent',
  genreId: 'dance-pop',
  mood: 'solaire et dansant',
  vocalId: 'powerhouse-female',
  bpm: 124,
  lang: 'fr',
  structureId: 'radio',
  influence: '',
  extras: '',
  keepOwn: false,
  ownLyrics: '',
  album: false,
  albumCount: 6,
  seed: 7,
  importedStyle: '',
  importedExclude: '',
  importedName: '',
};

export type Output = {
  style: string;
  layers: { n: string; label: string; value: string }[];
  exclude: string;
  blocks: LyricBlock[];
  lyrics: string;
  titles: string[];
  dna: DNA;
  tracks: Track[];
  master: string;
};

export function computeOutput(s: GenState, masterTemplate: string): Output {
  const genre = GENRES.find((g) => g.id === s.genreId) ?? GENRES[0];
  const rng = makeRng(seedFrom(`${s.seed}|${s.idea}|${s.genreId}|${s.mood}|${s.vocalId}|${s.bpm}|${s.structureId}`));
  const style = buildStyle({
    genre,
    bpm: s.bpm,
    vocalId: s.vocalId,
    mood: s.mood,
    structureId: s.structureId,
    idea: s.idea,
    rng,
  });
  const exclude = buildExclude(genre, s.bpm, rng);
  const blocks = buildLyrics({
    genre,
    structureId: s.structureId,
    vocalId: s.vocalId,
    bpm: s.bpm,
    idea: s.idea,
    lang: s.lang,
    ownLyrics: s.keepOwn ? s.ownLyrics : '',
    rng,
  });
  const titles = buildTitles(s.idea, rng);
  const influence = s.influence || genre.cluster;
  const imported = Boolean(s.importedStyle.trim());
  const styleText = imported ? s.importedStyle.trim() : style.text;
  const layers = imported
    ? s.importedStyle
        .split(/,\s*/)
        .slice(0, 6)
        .map((chunk, i) => ({ n: String(i + 1), label: STYLE_LABELS[i] ?? 'Couche', value: chunk }))
    : style.layers;
  return {
    style: styleText,
    layers,
    exclude: imported && s.importedExclude.trim() ? s.importedExclude.trim() : exclude,
    blocks,
    lyrics: lyricsText(blocks),
    titles,
    dna: buildDNA(influence, genre, rng),
    tracks: s.album ? buildAlbum(s.idea, genre, s.albumCount, rng) : [],
    master: masterTemplate
      .replace(/\{\{IDEE\}\}/g, s.idea || '—')
      .replace(/\{\{GENRE\}\}/g, `${genre.name} (${genre.genreLayer})`)
      .replace(/\{\{HUMEUR\}\}/g, s.mood)
      .replace(/\{\{VOCALE\}\}/g, `${VOCALS.find((v) => v.id === s.vocalId)?.label ?? ''}`)
      .replace(/\{\{BPM\}\}/g, String(s.bpm))
      .replace(/\{\{LANGUE\}\}/g, s.lang)
      .replace(/\{\{STRUCTURE\}\}/g, `${STRUCTURES.find((x) => x.id === s.structureId)?.name ?? ''} → ${STRUCTURES.find((x) => x.id === s.structureId)?.sections.join(', ') ?? ''}`)
      .replace(/\{\{INFLUENCE\}\}/g, s.influence || 'aucune')
      .replace(/\{\{EXTRAS\}\}/g, s.extras || 'aucune'),
  };
}

export type SavedPrompt = {
  id: string;
  at: number;
  idea: string;
  title: string;
  style: string;
  exclude: string;
  lyrics: string;
};

const KEY = 'hookprompt.saved.v1';

export function loadSaved(): SavedPrompt[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as SavedPrompt[]) : [];
  } catch {
    return [];
  }
}

export function persistSaved(list: SavedPrompt[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, 40)));
  } catch {
    /* stockage indisponible */
  }
}

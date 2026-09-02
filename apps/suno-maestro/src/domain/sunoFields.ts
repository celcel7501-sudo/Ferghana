import type { FieldBudget } from '@/types';

/** Limites dures imposees par Suno. Depassement = troncature silencieuse. */
export const STYLE_LIMIT = 1000;
export const LYRICS_LIMIT = 5000;

/** Marge minimale sous la limite avant de considerer un champ "confortable". */
export const SAFE_MARGIN = 50;

/** Prefixe utilise quand le bloc d'exclusion est recolle au champ de style. */
const FALLBACK_PREFIX = ' Exclude: ';

export const measure = (
  stylePrompt: string,
  lyrics: string,
  excludeBlock: string,
): FieldBudget => {
  const styleChars = stylePrompt.trim().length;
  const excludeChars = excludeBlock.trim().length;
  const styleWithExclude =
    excludeChars === 0
      ? styleChars
      : styleChars + FALLBACK_PREFIX.length + excludeChars + 1;

  return {
    styleChars,
    styleLimit: STYLE_LIMIT,
    lyricsChars: lyrics.trim().length,
    lyricsLimit: LYRICS_LIMIT,
    excludeChars,
    styleWithExclude,
    fallbackPossible: styleWithExclude <= STYLE_LIMIT - SAFE_MARGIN,
  };
};

export const isOverBudget = (b: FieldBudget): boolean =>
  b.styleChars > b.styleLimit || b.lyricsChars > b.lyricsLimit;

/**
 * Compresse un prompt de style en retirant des clauses par ordre de sacrifice :
 * texture, puis ornement, puis mastering. On ne touche jamais a la premiere
 * phrase (genre + tempo) ni a une clause de persistance.
 */
export const compressStyle = (stylePrompt: string, target: number): string => {
  const sentences = stylePrompt
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (sentences.length <= 2) return stylePrompt;

  const isProtected = (s: string): boolean =>
    /BPM|Persistent/i.test(s) || sentences.indexOf(s) === 0;

  const droppableOrder = [...sentences]
    .map((s, i) => ({ s, i }))
    .filter(({ s }) => !isProtected(s))
    .sort((a, b) => b.s.length - a.s.length);

  const removed = new Set<number>();
  let current = stylePrompt.trim().length;
  for (const { s, i } of droppableOrder) {
    if (current <= target) break;
    removed.add(i);
    current -= s.length + 1;
  }
  return sentences.filter((_, i) => !removed.has(i)).join(' ');
};

/** Tronque proprement des paroles sur une frontiere de section. */
export const trimLyricsToBudget = (lyrics: string, limit = LYRICS_LIMIT): string => {
  if (lyrics.length <= limit) return lyrics;
  const blocks = lyrics.split(/\n(?=\[)/);
  const kept: string[] = [];
  let total = 0;
  for (const b of blocks) {
    if (total + b.length + 1 > limit) break;
    kept.push(b);
    total += b.length + 1;
  }
  return kept.join('\n');
};

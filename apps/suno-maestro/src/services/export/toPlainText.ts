import type { GenerationResult } from '@/types';

/** Version texte brut, pensee pour un collage direct dans Suno. */
export const resultToPlainText = (r: GenerationResult, title: string): string =>
  [
    `${title || r.direction.workingTitle}`,
    '',
    `--- STYLE OF MUSIC (${r.budget.styleChars}/${r.budget.styleLimit}) ---`,
    r.stylePrompt,
    '',
    `--- EXCLUDE STYLES (${r.budget.excludeChars}) ---`,
    r.excludeBlock,
    '',
    `--- LYRICS (${r.budget.lyricsChars}/${r.budget.lyricsLimit}) ---`,
    r.lyrics,
  ].join('\n');

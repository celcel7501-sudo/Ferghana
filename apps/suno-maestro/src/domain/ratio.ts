/**
 * Ratio hook / couplets, mesure section par section, balises comprises.
 * Repere d'interpretation : < 1 narratif, 1 a 2 equilibre, > 2,2 club.
 */
export const hookVerseRatio = (lyrics: string): number => {
  const blocks = lyrics.split(/\n(?=\[)/);
  let hook = 0;
  let verse = 0;

  for (const block of blocks) {
    const header = block.slice(0, block.indexOf(']') + 1);
    if (/refrain|chorus|hook/i.test(header)) hook += block.trim().length;
    else if (/couplet|verse/i.test(header)) verse += block.trim().length;
  }
  if (verse === 0) return 0;
  return Math.round((hook / verse) * 100) / 100;
};

export const ratioLabel = (r: number): string => {
  if (r === 0) return 'non mesurable';
  if (r < 1) return 'narratif — le texte prime';
  if (r < 2.2) return 'équilibré — hook et propos coexistent';
  return 'club — le hook domine';
};

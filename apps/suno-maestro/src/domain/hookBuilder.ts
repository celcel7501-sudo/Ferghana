/**
 * Un refrain "entrainant" est un refrain dont les lignes partagent le meme
 * squelette syllabique : meme rythme melodique sur les quatre lignes, donc une
 * phrase de quatre mesures que l'auditeur predit des la premiere ecoute.
 */

/** Compte approximatif des syllabes chantees d'un vers francais. */
export const countSyllables = (line: string): number => {
  const cleaned = line
    .toLowerCase()
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[^a-zàâäéèêëîïôöùûüÿçœæ'\s-]/g, ' ');

  const words = cleaned.split(/[\s'-]+/).filter(Boolean);
  let total = 0;

  for (const w of words) {
    const groups = w.match(/[aàâäeéèêëiîïoôöuùûüyÿœæ]+/g) ?? [];
    let n = groups.length;
    // 'e' muet final non compte, sauf mot d'une seule syllabe.
    if (n > 1 && /e$/.test(w)) n -= 1;
    total += Math.max(1, n);
  }
  return total;
};

export interface HookAnalysis {
  lines: string[];
  syllables: number[];
  isRegular: boolean;
  target: number;
}

export const analyseHook = (chorus: string): HookAnalysis => {
  const lines = chorus
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith('['));
  const syllables = lines.map(countSyllables);
  const target = syllables.length ? (syllables[0] as number) : 0;
  const isRegular = syllables.length > 1 && syllables.every((s) => Math.abs(s - target) <= 1);
  return { lines, syllables, isRegular, target };
};

/** Instruction a placer dans le champ de style quand on veut un hook regulier. */
export const CHORUS_REGULARITY_TAG =
  'The chorus melody is one four-bar phrase repeated with the same rhythm on every line.';

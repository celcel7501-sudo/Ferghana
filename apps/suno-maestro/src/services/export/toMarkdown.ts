import type { GenerationResult } from '@/types';
import { ratioLabel } from '@/domain/ratio';

export const resultToMarkdown = (r: GenerationResult, title: string): string => {
  const d = r.direction;
  const lines: string[] = [];

  lines.push(`# ${title || d.workingTitle}`);
  if (r.isDemo) lines.push('\n> Généré en mode démonstration (aucune IA distante appelée).');

  lines.push('\n## Direction artistique\n');
  lines.push(`- **Titre provisoire** : ${d.workingTitle}`);
  lines.push(`- **Thème** : ${d.theme}`);
  lines.push(`- **Émotion** : ${d.emotion}`);
  lines.push(`- **Énergie** : ${d.energy}`);
  lines.push(`- **Public** : ${d.audience}`);
  lines.push(`- **Identité sonore** : ${d.sonicIdentity}`);
  lines.push(`- **Intention du refrain** : ${d.chorusIntent}`);

  lines.push(`\n## Prompt Suno — ${r.budget.styleChars} / ${r.budget.styleLimit} caractères\n`);
  lines.push('```');
  lines.push(r.stylePrompt);
  lines.push('```');

  if (r.excludeBlock) {
    lines.push(`\n## Bloc d'exclusion — ${r.budget.excludeChars} caractères\n`);
    lines.push('```');
    lines.push(r.excludeBlock);
    lines.push('```');
    lines.push(
      r.budget.fallbackPossible
        ? `\nMode replié possible : ${r.budget.styleWithExclude} / ${r.budget.styleLimit}.`
        : `\n**Champ dédié obligatoire** : recollé, le style atteindrait ${r.budget.styleWithExclude} / ${r.budget.styleLimit}.`,
    );
  }

  lines.push('\n## Structure\n');
  lines.push('| Section | Rôle | Mesures |');
  lines.push('|---|---|---|');
  for (const s of r.structure) lines.push(`| ${s.tag} | ${s.role} | ${s.bars} |`);

  lines.push(`\n## Paroles complètes — ${r.budget.lyricsChars} / ${r.budget.lyricsLimit} caractères\n`);
  lines.push('```');
  lines.push(r.lyrics);
  lines.push('```');

  lines.push('\n## Hook principal\n');
  lines.push('```');
  lines.push(r.hook);
  lines.push('```');

  lines.push('\n## Variantes du refrain\n');
  lines.push(`**Radio**\n\n\`\`\`\n${r.variants.radio}\n\`\`\``);
  lines.push(`**Plus rap**\n\n\`\`\`\n${r.variants.rap}\n\`\`\``);
  lines.push(`**Plus R&B mélodique**\n\n\`\`\`\n${r.variants.melodic}\n\`\`\``);

  lines.push('\n## Direction de production\n');
  const p = r.production;
  lines.push(`- **Batterie** : ${p.drums}`);
  lines.push(`- **Basse** : ${p.bass}`);
  lines.push(`- **Instruments** : ${p.instruments}`);
  lines.push(`- **Chœurs** : ${p.choirs}`);
  lines.push(`- **Effets** : ${p.effects}`);
  lines.push(`- **Scratches** : ${p.scratches}`);
  lines.push(`- **Arrangement** : ${p.arrangement}`);

  lines.push('\n## Direction vocale\n');
  for (const v of r.vocalDirection) lines.push(`- ${v}`);

  lines.push('\n## Conseils Suno\n');
  lines.push('**À conserver**');
  for (const x of r.advice.keep) lines.push(`- ${x}`);
  lines.push('\n**À régénérer**');
  for (const x of r.advice.regenerate) lines.push(`- ${x}`);
  lines.push('\n**Si le refrain manque d’impact**');
  for (const x of r.advice.ifWeakChorus) lines.push(`- ${x}`);

  lines.push(`\n---\n\nRatio hook / couplets : **${r.hookVerseRatio}** — ${ratioLabel(r.hookVerseRatio)}.`);

  return lines.join('\n');
};

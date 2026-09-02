#!/usr/bin/env node
/**
 * Exporte tout le code source en Markdown, decoupe en parties collables.
 *
 *   node tools/export-source.mjs [dossier-de-sortie] [caracteres-par-partie]
 *
 * L'ordre n'est pas alphabetique : il va du contrat vers l'interface, pour
 * qu'un lecteur qui s'arrete a la partie 1 ait quand meme le modele du systeme.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = join(appRoot, '..', '..');
const outDir = process.argv[2] ?? join(appRoot, 'export');
const budget = Number(process.argv[3] ?? 55_000);

/** Ordre de lecture delibere : contrat -> metier -> services -> etat -> UI -> serveur. */
const ORDER = [
  ['Contrat de donnees', [
    'apps/suno-maestro/src/types/brief.ts',
    'apps/suno-maestro/src/types/generation.ts',
    'apps/suno-maestro/src/types/project.ts',
    'apps/suno-maestro/src/types/index.ts',
  ]],
  ['Logique metier (pure, testable sous Node)', [
    'apps/suno-maestro/src/domain/sunoFields.ts',
    'apps/suno-maestro/src/domain/hookBuilder.ts',
    'apps/suno-maestro/src/domain/ratio.ts',
    'apps/suno-maestro/src/domain/styleBuilder.ts',
    'apps/suno-maestro/src/domain/lyricsBuilder.ts',
  ]],
  ['Catalogues et donnees', [
    'apps/suno-maestro/src/data/styles.ts',
    'apps/suno-maestro/src/data/options.ts',
    'apps/suno-maestro/src/data/seed.ts',
  ]],
  ['Services : IA et export', [
    'apps/suno-maestro/src/services/ai/types.ts',
    'apps/suno-maestro/src/services/ai/prompts.ts',
    'apps/suno-maestro/src/services/ai/demoProvider.ts',
    'apps/suno-maestro/src/services/ai/remoteProvider.ts',
    'apps/suno-maestro/src/services/ai/client.ts',
    'apps/suno-maestro/src/services/export/toMarkdown.ts',
    'apps/suno-maestro/src/services/export/toPlainText.ts',
  ]],
  ['Persistance et etat', [
    'apps/suno-maestro/src/storage/keys.ts',
    'apps/suno-maestro/src/storage/projectRepository.ts',
    'apps/suno-maestro/src/state/ProjectsContext.tsx',
    'apps/suno-maestro/src/state/useGeneration.ts',
  ]],
  ['Design et composants reutilisables', [
    'apps/suno-maestro/src/theme/colors.ts',
    'apps/suno-maestro/src/theme/spacing.ts',
    'apps/suno-maestro/src/theme/typography.ts',
    'apps/suno-maestro/src/theme/index.ts',
    'apps/suno-maestro/src/components/ui/Button.tsx',
    'apps/suno-maestro/src/components/ui/Card.tsx',
    'apps/suno-maestro/src/components/ui/Chip.tsx',
    'apps/suno-maestro/src/components/ui/Field.tsx',
    'apps/suno-maestro/src/components/ui/Stepper.tsx',
    'apps/suno-maestro/src/components/ui/Toggle.tsx',
    'apps/suno-maestro/src/components/ui/Tabs.tsx',
    'apps/suno-maestro/src/components/ui/Screen.tsx',
    'apps/suno-maestro/src/components/ui/EmptyState.tsx',
    'apps/suno-maestro/src/components/ui/index.ts',
    'apps/suno-maestro/src/components/domain/StylePicker.tsx',
    'apps/suno-maestro/src/components/domain/BudgetMeter.tsx',
    'apps/suno-maestro/src/components/domain/CopyBlock.tsx',
    'apps/suno-maestro/src/components/domain/ProjectCard.tsx',
    'apps/suno-maestro/src/components/domain/index.ts',
  ]],
  ['Navigation et ecrans', [
    'apps/suno-maestro/src/navigation/types.ts',
    'apps/suno-maestro/src/navigation/RootNavigator.tsx',
    'apps/suno-maestro/App.tsx',
    'apps/suno-maestro/src/screens/HomeScreen.tsx',
    'apps/suno-maestro/src/screens/BriefScreen.tsx',
    'apps/suno-maestro/src/screens/DirectionScreen.tsx',
    'apps/suno-maestro/src/screens/GenerateScreen.tsx',
    'apps/suno-maestro/src/screens/ResultScreen.tsx',
    'apps/suno-maestro/src/screens/LibraryScreen.tsx',
  ]],
  ['Serveur proxy IA', [
    'apps/suno-maestro-server/src/config.ts',
    'apps/suno-maestro-server/src/schema.ts',
    'apps/suno-maestro-server/src/prompt.ts',
    'apps/suno-maestro-server/src/anthropic.ts',
    'apps/suno-maestro-server/src/http.ts',
    'apps/suno-maestro-server/src/index.ts',
  ]],
  ['Configuration de build', [
    'apps/suno-maestro/package.json',
    'apps/suno-maestro/tsconfig.json',
    'apps/suno-maestro/babel.config.js',
    'apps/suno-maestro/app.json',
    'apps/suno-maestro-server/package.json',
    'apps/suno-maestro-server/tsconfig.json',
  ]],
];

const PREAMBLE = `# Suno Maestro — code source complet

Application mobile React Native / Expo en TypeScript strict, plus son serveur
proxy IA. Elle transforme une idée musicale en prompt Suno mesuré, paroles,
structure, direction vocale et arrangement.

## Ce qu'il faut savoir avant de lire

**Architecture en couches.** \`domain/\` et \`data/\` ne dépendent ni de React ni
de React Native : c'est ce qui permet de les compiler et de les tester sous Node
seul, sans émulateur. Toute logique métier va là, jamais dans un écran.

**Deux contraintes dures, non négociables.** Suno tronque en silence : le champ
de style tient en 1000 caractères, les paroles en 5000, balises comprises. Ces
longueurs sont **calculées**, jamais estimées (\`domain/sunoFields.ts\`).

**Aucune clé secrète dans l'application.** L'app ne lit qu'une URL publique
(\`EXPO_PUBLIC_AI_BASE_URL\`) pointant vers le serveur proxy, qui détient seul la
clé du fournisseur. Si l'URL est vide, l'app bascule en mode démonstration et
l'affiche à l'écran.

**Deux fournisseurs IA interchangeables** derrière une seule interface
\`AiProvider\` : \`demoProvider\` (générateur local déterministe) et
\`remoteProvider\` (appel du serveur). Changer de fournisseur ne touche aucun
écran.

**Les mesures ne sont jamais déléguées.** Même en mode serveur, \`budget\` et
\`hookVerseRatio\` sont recalculés côté application sur le texte reçu.

**Règles de contenu**, appliquées côté serveur dans le prompt système : les
paroles produites doivent être originales ; pas de reproduction d'œuvre
existante ; un nom d'artiste cité par l'utilisateur est traduit en
caractéristiques générales (énergie, époque, instrumentation, groove) ; le champ
de style ne contient jamais de nom propre d'artiste ni de paroles.

## Vérifications disponibles

\`\`\`bash
cd apps/suno-maestro        && npm run typecheck && npm test   # 19 vérifications
cd apps/suno-maestro-server && npm run typecheck
\`\`\`

## Pièges déjà rencontrés — ne pas les réintroduire

1. **\`Card\` doit rendre un seul élément.** Une version antérieure rendait
   \`Pressable > View\` avec les styles sur le \`View\` intérieur : l'enfant flex du
   parent était alors le \`Pressable\`, sans largeur, et tout \`width\` en
   pourcentage se calculait contre une largeur écrasée.
2. **Le serveur tourne en mode strip-only de Node** : pas de propriétés de
   paramètre dans les constructeurs, ni aucune syntaxe TypeScript exigeant une
   génération de code. \`erasableSyntaxOnly\` est activé pour que le compilateur
   l'attrape.
3. **Le SDK Anthropic doit être en ^0.123** : les versions antérieures n'ont ni
   \`messages.parse\` ni \`output_config\`. Le helper zod importe \`zod/v4\`.
4. **\`babel-plugin-module-resolver\` est requis** par l'alias \`@/\` déclaré dans
   \`babel.config.js\`.
`;

const read = (rel) => {
  const p = join(repoRoot, rel);
  if (!existsSync(p)) return null;
  return readFileSync(p, 'utf8');
};

const lang = (rel) =>
  rel.endsWith('.tsx') ? 'tsx' : rel.endsWith('.json') ? 'json' : rel.endsWith('.js') ? 'js' : 'ts';

// Construit les blocs, puis les repartit en parties sous le budget.
const blocks = [];
for (const [section, files] of ORDER) {
  blocks.push({ kind: 'section', text: `\n---\n\n## ${section}\n` });
  for (const rel of files) {
    const content = read(rel);
    if (content === null) {
      console.warn(`  ! absent, ignore : ${rel}`);
      continue;
    }
    blocks.push({
      kind: 'file',
      rel,
      text: `\n### \`${rel}\`\n\n\`\`\`${lang(rel)}\n${content.replace(/\s*$/, '')}\n\`\`\`\n`,
    });
  }
}

const parts = [];
let current = [];
let size = 0;
let lastSection = '';
for (const b of blocks) {
  if (b.kind === 'section') lastSection = b.text;
  if (size + b.text.length > budget && current.length) {
    parts.push(current);
    current = b.kind === 'file' && lastSection ? [{ kind: 'section', text: lastSection }] : [];
    size = current.reduce((n, x) => n + x.text.length, 0);
  }
  current.push(b);
  size += b.text.length;
}
if (current.length) parts.push(current);

mkdirSync(outDir, { recursive: true });
const total = parts.length;
const written = [];

parts.forEach((blocksOfPart, i) => {
  const n = i + 1;
  const head =
    n === 1
      ? PREAMBLE
      : `# Suno Maestro — code source (partie ${n} / ${total})\n\nSuite de la partie ${n - 1}. Le contexte du projet, l'architecture et les pièges connus sont dans la **partie 1** — la lire d'abord.\n`;
  const footer =
    n < total
      ? `\n---\n\n*Fin de la partie ${n} / ${total}. La suite arrive dans le message suivant.*\n`
      : `\n---\n\n*Fin du code source (${total} parties).*\n`;
  const body = head + blocksOfPart.map((b) => b.text).join('');
  const file = join(outDir, `suno-maestro-source-${n}-sur-${total}.md`);
  writeFileSync(file, body + footer);
  written.push({ file, chars: (body + footer).length });
});

console.log(`${total} partie(s) ecrite(s) dans ${outDir} :`);
for (const w of written) {
  console.log(`  ${w.file.split('/').pop()} — ${w.chars.toLocaleString('fr-FR')} caracteres`);
}

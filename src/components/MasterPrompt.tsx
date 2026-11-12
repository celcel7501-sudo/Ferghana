import { ALBUM_PROMPT, CRITIC_PROMPT, MASTER_PROMPT, SOURCES } from '../data/masterPrompt';
import { Badge, Code, CopyButton, Panel } from './ui';

type Props = { master: string };

const PIPELINE = [
  {
    stage: 'A',
    name: 'Passage auteur',
    detail: 'Point de vue narratif, temps verbaux, scansion et syllabes par ligne, images concrètes, placement des tags de structure et indices de livraison.',
  },
  {
    stage: 'B',
    name: 'Passage producteur',
    detail: 'BPM, instrumentation par section, langage de mixage, arcs dynamiques, budget de caractères du champ Style.',
  },
  {
    stage: 'C',
    name: 'Critic pass',
    detail: 'Auto-notage sur 5 axes : hook mémorisable, tags utiles, zéro descripteur générique, limites Suno, aucun nom d’artiste. Sous 8/10 → réécriture.',
  },
];

export default function MasterPrompt({ master }: Props) {
  const all = `${master}\n\n/* --- CRITIC PASS --- */\n${CRITIC_PROMPT}\n\n/* --- MODE ALBUM --- */\n${ALBUM_PROMPT.replace('{{IDEE}}', 'le concept d’album').replace('{{COUNT}}', '8')}`;

  return (
    <div className="space-y-4">
      <Panel tone="accent">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="amber">Reconstruction</Badge>
          <CopyButton text={all} label="Copier le prompt maître" />
          <CopyButton text={MASTER_PROMPT} label="Copier sans les blocs annexes" />
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
          Le prompt système de HookGenius.app n'est pas publié : l'application garde son moteur en
          propriétaire côté serveur. Voici une <strong className="text-amber-200">reconstruction fidèle</strong>,
          écrite d'après tout ce que l'éditeur documente publiquement — pipeline en deux étapes,
          prompt de style en 6 couches, Artist DNA, Exclude Styles, critic-pass et limites Suno v6.
          Les variables <code className="rounded bg-white/10 px-1 font-mono text-[12px] text-amber-200">{'{{…}}'}</code>{' '}
          sont déjà remplies avec tes réglages du générateur.
        </p>
      </Panel>

      <div className="grid gap-4 md:grid-cols-3">
        {PIPELINE.map((p) => (
          <Panel key={p.stage} className="h-full">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-300/15 font-mono text-sm font-bold text-amber-200">
                {p.stage}
              </span>
              <h3 className="text-sm font-semibold text-slate-100">{p.name}</h3>
            </div>
            <p className="mt-2.5 text-[13px] leading-relaxed text-slate-400">{p.detail}</p>
          </Panel>
        ))}
      </div>

      <Panel
        title="Prompt maître — variables injectées"
        right={<CopyButton text={master} label="Copier" />}
      >
        <Code className="max-h-[640px] overflow-y-auto">{master}</Code>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Critic pass (étape C)" right={<CopyButton text={CRITIC_PROMPT} />}>
          <Code>{CRITIC_PROMPT}</Code>
        </Panel>
        <Panel title="Mode album" right={<CopyButton text={ALBUM_PROMPT} />}>
          <Code>{ALBUM_PROMPT.replace('{{IDEE}}', 'le concept d’album').replace('{{COUNT}}', '8')}</Code>
        </Panel>
      </div>

      <Panel title="Sources publiques utilisées pour la reconstruction">
        <ul className="space-y-1.5 text-sm">
          {SOURCES.map((s) => (
            <li key={s.url + s.label} className="flex flex-wrap items-baseline gap-2">
              <span className="text-slate-400">→</span>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-amber-200 underline decoration-amber-300/30 underline-offset-2 hover:decoration-amber-300"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          Reconstruction indépendante, sans accès au code serveur de HookGenius. Utilisable librement :
          colle-la dans n'importe quel modèle pour obtenir un prompt de style Suno en 6 couches,
          des paroles balisées et un bloc Exclude Styles.
        </p>
      </Panel>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { audit, LIMITS } from '../lib/engine';
import { Badge, Code, CopyButton, Field, Meter, Panel, TextArea } from './ui';

type Props = {
  style: string;
  exclude: string;
  lyrics: string;
};

const CHECKS = [
  'Pas de nom d’artiste réel (l’influence doit être décomposée en ADN sonore)',
  'Pas de tag générique : radio-ready, hit, professional, best quality',
  'Un BPM ferme, jamais une fourchette',
  'Un sous-genre précis plutôt qu’un genre seul',
  'Des indices de livraison après chaque tag de structure (via « | »)',
  'Le hook répété à l’identique au moins deux fois',
  'Première ligne utilisable comme hook de short vertical',
];

export default function Compliance({ style, exclude, lyrics }: Props) {
  const [s, setS] = useState(style);
  const [x, setX] = useState(exclude);
  const [l, setL] = useState(lyrics);

  useEffect(() => {
    setS(style);
    setX(exclude);
    setL(lyrics);
  }, [style, exclude, lyrics]);

  const { rows, issues } = audit(s, x, l);
  const errors = issues.filter((i) => i.level === 'error').length;
  const warns = issues.filter((i) => i.level === 'warn').length;
  const score = Math.max(0, 100 - errors * 22 - warns * 9);

  return (
    <div className="space-y-4">
      <Panel tone="accent">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl border text-2xl font-bold"
              style={{
                borderColor: errors ? 'rgb(244 63 94 / 0.4)' : warns ? 'rgb(251 191 36 / 0.4)' : 'rgb(52 211 153 / 0.4)',
                background: errors ? 'rgb(244 63 94 / 0.1)' : warns ? 'rgb(251 191 36 / 0.1)' : 'rgb(52 211 153 / 0.1)',
                color: errors ? '#fda4af' : warns ? '#fcd34d' : '#6ee7b7',
              }}
            >
              {score}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">Score de conformité Suno v6</h3>
              <p className="text-xs text-slate-400">
                {errors} blocage{errors > 1 ? 's' : ''} · {warns} avertissement{warns > 1 ? 's' : ''} · calculé en direct
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            {rows.map((r) => (
              <Meter key={r.label} label={r.label} value={Number(r.value)} limit={r.limit} />
            ))}
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Style" right={<CopyButton text={s} />}>
          <Field label="Champ Style" hint={`max ${LIMITS.style}`}>
            <TextArea rows={7} value={s} onChange={(e) => setS(e.target.value)} />
          </Field>
        </Panel>
        <Panel title="Exclude Styles" right={<CopyButton text={x} />}>
          <Field label="Prompt négatif" hint={`max ${LIMITS.exclude}`}>
            <TextArea rows={7} value={x} onChange={(e) => setX(e.target.value)} />
          </Field>
        </Panel>
        <Panel title="Lyrics" right={<CopyButton text={l} />}>
          <Field label="Paroles balisées" hint={`max ${LIMITS.lyrics}`}>
            <TextArea rows={7} value={l} onChange={(e) => setL(e.target.value)} />
          </Field>
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Diagnostic">
          <ul className="space-y-2">
            {issues.map((i, idx) => (
              <li
                key={idx}
                className="flex gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5 text-[13px] leading-snug"
              >
                <span>{i.level === 'error' ? '⛔' : i.level === 'warn' ? '⚠️' : '✅'}</span>
                <span className="text-slate-300">{i.text}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Règles appliquées">
          <ul className="space-y-1.5">
            {CHECKS.map((c) => (
              <li key={c} className="flex gap-2.5 text-[13px] leading-snug text-slate-400">
                <span className="text-amber-300/70">▸</span>
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge tone="emerald">lyrics 5 000</Badge>
            <Badge tone="emerald">style 1 000</Badge>
            <Badge tone="emerald">exclude 1 000</Badge>
          </div>
        </Panel>
      </div>

      <Panel title="Exemple de pack prêt à coller dans Suno Custom mode" right={<CopyButton text={`STYLE\n${s}\n\nEXCLUDE STYLES\n${x}\n\nLYRICS\n${l}`} />}>
        <Code>{`STYLE\n${s}\n\nEXCLUDE STYLES\n${x}\n\nLYRICS\n${l}`}</Code>
      </Panel>
    </div>
  );
}

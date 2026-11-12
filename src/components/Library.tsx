import { useMemo, useState } from 'react';
import { CLUSTERS, LIBRARY, type LibEntry } from '../data/library';
import { LIMITS } from '../lib/engine';
import { Badge, Chip, Code, CopyButton, TextInput } from './ui';

export default function Library({ onImport }: { onImport: (e: LibEntry) => void }) {
  const [q, setQ] = useState('');
  const [cluster, setCluster] = useState<string>('Tous');

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return LIBRARY.filter((e) => {
      const okCluster = cluster === 'Tous' || e.cluster === cluster;
      const okQuery = !needle || `${e.name} ${e.style} ${e.cluster}`.toLowerCase().includes(needle);
      return okCluster && okQuery;
    });
  }, [q, cluster]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="min-w-[240px] flex-1">
          <TextInput
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un style, un tag, un genre…"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['Tous', ...CLUSTERS].map((c) => (
            <Chip key={c} active={cluster === c} onClick={() => setCluster(c)}>
              {c}
            </Chip>
          ))}
        </div>
      </div>

      <p className="text-sm text-slate-400">
        {list.length} prompt{list.length > 1 ? 's' : ''} copiables — formats mesurés sur les limites Suno v6
        (style {LIMITS.style} / exclude {LIMITS.exclude} / lyrics {LIMITS.lyrics} caractères).
      </p>

      <div className="grid gap-4 lg:grid-cols-2">
        {list.map((e) => (
          <article key={e.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <header className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">{e.name}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <Badge>{e.cluster}</Badge>
                  {e.sections && <Badge tone="amber">{e.sections.length} sections</Badge>}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <CopyButton text={e.style} label="Style" />
                {e.exclude && <CopyButton text={e.exclude} label="Exclude" />}
                {e.sections && <CopyButton text={e.sections.join(', ')} label="Plan" />}
                <button
                  onClick={() => onImport(e)}
                  className="rounded-lg border border-amber-300/40 bg-amber-300/10 px-2.5 py-1.5 text-xs font-medium text-amber-200 transition hover:bg-amber-300/20"
                >
                  ⤓ Charger
                </button>
              </div>
            </header>
            <Code>{e.style}</Code>
            {e.exclude && <p className="mt-2 font-mono text-[11px] text-rose-300/70">exclude : {e.exclude}</p>}
            {e.sections && (
              <p className="mt-1 font-mono text-[11px] text-slate-500">{e.sections.join(' → ')}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

import { useMemo } from 'react';
import { GENRES, MOOD_LIBRARY, STRUCTURES, VOCALS } from '../data/genres';
import { LANGUAGES, LIMITS } from '../lib/engine';
import { type GenState, type Output, type SavedPrompt } from '../lib/state';
import { cn } from '../utils/cn';
import { Badge, Chip, Code, CopyButton, Field, Meter, Panel, Select, TextArea, TextInput } from './ui';

type Props = {
  state: GenState;
  patch: (p: Partial<GenState>) => void;
  out: Output;
  saved: SavedPrompt[];
  onSave: () => void;
  onDelete: (id: string) => void;
};

function download(name: string, text: string) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

export default function Generator({ state, patch, out, saved, onSave, onDelete }: Props) {
  const genre = useMemo(() => GENRES.find((g) => g.id === state.genreId) ?? GENRES[0], [state.genreId]);
  const structure = STRUCTURES.find((s) => s.id === state.structureId) ?? STRUCTURES[0];

  const focusSection = out.layers.find((l) => l.label === 'Structure')?.value.split(',')[0] ?? 'hook';
  const fullPack = `### TITRE\n${out.titles.join(' / ')}\n\n### STYLE\n${out.style}\n\n### EXCLUDE STYLES\n${out.exclude}\n\n### LYRICS\n${out.lyrics}\n\n### NOTES\n- Réécoute le ${focusSection} en premier : c'est là que la dynamique se joue.\n- Si le rendu est plat, monte la présence de la voix de 1 à 2 dB.\n- BPM fixé à ${state.bpm} : garde-le ferme dans Suno.`;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
      {/* ---------------- Colonnes de contrôle ---------------- */}
      <div className="space-y-4">
        <Panel title="Étape A — l'idée" tone="accent">
          <TextArea
            rows={4}
            value={state.idea}
            onChange={(e) => patch({ idea: e.target.value })}
            placeholder="Décris la chanson en langage naturel…"
          />
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            Le moteur extrait les mots-porteurs de l'idée pour construire le hook et les titres.
          </p>
        </Panel>

        <Panel title="Étape B — le producteur">
          <div className="space-y-4">
            <Field label="Genre" hint={`${GENRES.length} presets`}>
              <Select value={state.genreId} onChange={(e) => patch({ genreId: e.target.value })}>
                {Array.from(new Set(GENRES.map((g) => g.cluster))).map((cluster) => (
                  <optgroup key={cluster} label={cluster}>
                    {GENRES.filter((g) => g.cluster === cluster).map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </Select>
            </Field>

            <Field label="BPM ferme" hint={`${genre.bpm[0]}–${genre.bpm[1]} recommandé`}>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={55}
                  max={180}
                  value={state.bpm}
                  onChange={(e) => patch({ bpm: Number(e.target.value) })}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-amber-300"
                />
                <span className="w-16 shrink-0 text-right font-mono text-sm text-amber-200">{state.bpm}</span>
              </div>
            </Field>

            <Field label="Archétype vocal" hint="14 profils">
              <Select value={state.vocalId} onChange={(e) => patch({ vocalId: e.target.value })}>
                {VOCALS.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.label} — {v.gender}
                  </option>
                ))}
              </Select>
            </Field>

            <div className="space-y-2">
              <Field label="Humeur">
                <div className="flex flex-wrap gap-1.5">
                  {Array.from(new Set([...genre.moods, ...MOOD_LIBRARY.slice(0, 6)])).map((m) => (
                    <Chip key={m} active={state.mood === m} onClick={() => patch({ mood: m })}>
                      {m}
                    </Chip>
                  ))}
                </div>
              </Field>
            </div>

            <Field label="Structure" hint={structure.note}>
              <Select value={state.structureId} onChange={(e) => patch({ structureId: e.target.value })}>
                {STRUCTURES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.sections.length} sections)
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Langue des paroles">
              <Select value={state.lang} onChange={(e) => patch({ lang: e.target.value })}>
                {LANGUAGES.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.label}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Influence artiste" hint="décomposée en ADN, jamais citée">
              <TextInput
                value={state.influence}
                onChange={(e) => patch({ influence: e.target.value })}
                placeholder="ex. une voix grave et dansante des années 80"
              />
            </Field>

            <Field label="Contraintes diverses">
              <TextInput
                value={state.extras}
                onChange={(e) => patch({ extras: e.target.value })}
                placeholder="duo, refrain bilingue, 30 s max…"
              />
            </Field>
          </div>
        </Panel>

        <Panel title="Tes propres paroles" right={<Badge tone={state.keepOwn ? 'emerald' : 'slate'}>{state.keepOwn ? 'gardées mot pour mot' : 'off'}</Badge>}>
          <button
            onClick={() => patch({ keepOwn: !state.keepOwn })}
            className={cn(
              'mb-3 w-full rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition',
              state.keepOwn
                ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-slate-200',
            )}
          >
            {state.keepOwn ? 'Paroles verrouillées' : 'Utiliser mes paroles'}
          </button>
          <TextArea
            rows={5}
            value={state.ownLyrics}
            onChange={(e) => patch({ ownLyrics: e.target.value })}
            placeholder="Une ligne par vers. Elles sont distribuées dans les couplets sans être retouchées."
            className={cn(!state.keepOwn && 'opacity-40')}
          />
        </Panel>

        <Panel
          title="Mode album"
          right={<Badge tone={state.album ? 'amber' : 'slate'}>{state.album ? `${state.albumCount} pistes` : 'off'}</Badge>}
        >
          <button
            onClick={() => patch({ album: !state.album })}
            className={cn(
              'mb-3 w-full rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition',
              state.album
                ? 'border-amber-300/40 bg-amber-300/10 text-amber-200'
                : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-slate-200',
            )}
          >
            {state.album ? 'Album connecté activé' : 'Activer le mode album'}
          </button>
          {state.album && (
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={2}
                max={12}
                value={state.albumCount}
                onChange={(e) => patch({ albumCount: Number(e.target.value) })}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-amber-300"
              />
              <span className="w-8 shrink-0 text-right font-mono text-sm text-amber-200">{state.albumCount}</span>
            </div>
          )}
        </Panel>
      </div>

      {/* ---------------- Résultats ---------------- */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => patch({ seed: Math.floor(Math.random() * 100000) })}
            className="rounded-xl bg-gradient-to-b from-amber-300 to-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:brightness-110"
          >
            ⟳ Régénérer
          </button>
          <CopyButton text={fullPack} label="Copier le pack complet" />
          <button
            onClick={() => download(`suno-${genre.id}.txt`, fullPack)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-amber-300/40 hover:text-amber-200"
          >
            ↓ Exporter .txt
          </button>
          <button
            onClick={onSave}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-amber-300/40 hover:text-amber-200"
          >
            ★ Sauver
          </button>
        </div>

        <Panel
          title="Style — les 6 couches"
          tone="accent"
          right={<CopyButton text={out.style} />}
        >
          <div className="mb-3 grid gap-1.5 sm:grid-cols-2">
            {out.layers.map((l) => (
              <div key={l.label} className="flex gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-2">
                <span className="mt-0.5 font-mono text-[10px] text-amber-300/70">{l.n}</span>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{l.label}</div>
                  <div className="text-[13px] leading-snug text-slate-200">{l.value}</div>
                </div>
              </div>
            ))}
          </div>
          <Code>{out.style}</Code>
          <div className="mt-3">
            <Meter label="Limite du champ Style (Suno v6)" value={out.style.length} limit={LIMITS.style} />
          </div>
        </Panel>

        <Panel title="Exclude styles (prompt négatif)" right={<CopyButton text={out.exclude} />}>
          <Code>{out.exclude}</Code>
          <div className="mt-3">
            <Meter label="Limite Exclude Styles" value={out.exclude.length} limit={LIMITS.exclude} />
          </div>
        </Panel>

        <Panel
          title={`Lyrics — ${structure.name}`}
          right={
            <div className="flex items-center gap-2">
              <Badge>{state.lang}</Badge>
              <CopyButton text={out.lyrics} />
            </div>
          }
        >
          <div className="space-y-2.5">
            {out.blocks.map((b, i) => (
              <div key={i} className="rounded-xl border border-white/[0.07] bg-slate-950/50 p-3">
                <div className="mb-1.5 font-mono text-[11.5px] text-amber-200">[{b.tag}]</div>
                <div className="space-y-0.5 font-mono text-[12.5px] leading-relaxed text-slate-300">
                  {b.lines.map((line, j) => (
                    <div key={j} className={line.startsWith('(') ? 'text-slate-500 italic' : ''}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <Meter label="Limite du champ Lyrics" value={out.lyrics.length} limit={LIMITS.lyrics} />
          </div>
        </Panel>

        <Panel title="Titres proposés" right={<CopyButton text={out.titles.join('\n')} />}>
          <div className="grid gap-2 sm:grid-cols-3">
            {out.titles.map((t, i) => (
              <div key={i} className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5">
                <div className="text-[10px] uppercase tracking-wider text-slate-500">
                  {['Évocateur', 'Direct', 'Conceptuel'][i]}
                </div>
                <div className="text-sm text-slate-100">{t}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="ADN d'artiste (décomposition sans nom)" right={<Badge tone="amber">Artist Influence</Badge>}>
          <dl className="grid gap-2 sm:grid-cols-2">
            {[
              ['Tempo', out.dna.tempo],
              ['Vocal', out.dna.vocal],
              ['Instrumentation', out.dna.instrumentation],
              ['Production', out.dna.production],
              ['POV lyrique', out.dna.pov],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5">
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{k}</dt>
                <dd className="text-[13px] leading-snug text-slate-200">{v}</dd>
              </div>
            ))}
          </dl>
        </Panel>

        {state.album && out.tracks.length > 0 && (
          <Panel title={`Album — ${out.tracks.length} pistes connectées`} right={<CopyButton text={out.tracks.map((t) => `${t.title} — ${t.hook} — ${t.bpm} BPM — ${t.signature} — ${t.role}`).join('\n')} />}>
            <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-white/[0.04] text-[10px] uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-3 py-2">Piste</th>
                    <th className="px-3 py-2">Hook</th>
                    <th className="px-3 py-2 text-right">BPM</th>
                    <th className="px-3 py-2">Signature</th>
                    <th className="px-3 py-2">Rôle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {out.tracks.map((t, i) => (
                    <tr key={i} className="text-slate-300">
                      <td className="px-3 py-2 font-medium text-slate-100">{t.title}</td>
                      <td className="px-3 py-2 text-slate-400">{t.hook}</td>
                      <td className="px-3 py-2 text-right font-mono text-amber-200">{t.bpm}</td>
                      <td className="px-3 py-2 text-slate-400">{t.signature}</td>
                      <td className="px-3 py-2 text-slate-400">{t.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        )}

        <Panel title={`Bibliothèque locale (${saved.length})`}>
          {saved.length === 0 ? (
            <p className="text-sm text-slate-500">
              Aucun prompt sauvegardé. Clique sur « ★ Sauver » pour garder une version dans ce navigateur.
            </p>
          ) : (
            <ul className="space-y-2">
              {saved.map((s) => (
                <li key={s.id} className="flex flex-wrap items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5">
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm text-slate-100">{s.title}</div>
                    <div className="truncate text-xs text-slate-500">{s.idea}</div>
                  </div>
                  <CopyButton text={s.style} label="Style" />
                  <CopyButton text={s.lyrics} label="Lyrics" />
                  <button
                    onClick={() => onDelete(s.id)}
                    className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-slate-400 transition hover:border-rose-400/40 hover:text-rose-300"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>
    </div>
  );
}

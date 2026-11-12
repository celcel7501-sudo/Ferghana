import { useMemo, useState } from 'react';
import Generator from './components/Generator';
import Library from './components/Library';
import Compliance from './components/Compliance';
import MasterPromptView from './components/MasterPrompt';
import { Badge, Panel } from './components/ui';
import { MASTER_PROMPT } from './data/masterPrompt';
import { LIBRARY, type LibEntry } from './data/library';
import { computeOutput, DEFAULT_STATE, loadSaved, persistSaved, type GenState, type SavedPrompt } from './lib/state';
import { cn } from './utils/cn';

const TABS = [
  { id: 'generate', label: 'Générateur', hint: 'idée → style 6 couches + lyrics' },
  { id: 'master', label: 'Prompt maître', hint: 'le prompt reconstruit' },
  { id: 'library', label: 'Bibliothèque', hint: 'prompts copiables' },
  { id: 'compliance', label: 'Conformité Suno', hint: 'limites v6' },
] as const;

type TabId = (typeof TABS)[number]['id'];

export default function App() {
  const [tab, setTab] = useState<TabId>('generate');
  const [state, setState] = useState<GenState>(DEFAULT_STATE);
  const [saved, setSaved] = useState<SavedPrompt[]>(() => loadSaved());

  const patch = (p: Partial<GenState>) => setState((s) => ({ ...s, ...p }));
  const out = useMemo(() => computeOutput(state, MASTER_PROMPT), [state]);

  const onSave = () => {
    const entry: SavedPrompt = {
      id: `${Date.now()}`,
      at: Date.now(),
      idea: state.idea,
      title: out.titles[0] ?? 'Sans titre',
      style: out.style,
      exclude: out.exclude,
      lyrics: out.lyrics,
    };
    const next = [entry, ...saved];
    setSaved(next);
    persistSaved(next);
  };

  const onDelete = (id: string) => {
    const next = saved.filter((s) => s.id !== id);
    setSaved(next);
    persistSaved(next);
  };

  const onImport = (e: LibEntry) => {
    patch({
      idea: e.name,
      importedStyle: e.style,
      importedExclude: e.exclude ?? '',
      importedName: e.name,
      keepOwn: false,
    });
    setTab('generate');
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-200 antialiased">
      {/* décor */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute -right-32 top-40 h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-4 py-8 sm:px-6 lg:py-12">
        {/* -------- en-tête -------- */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-400 text-xl shadow-lg shadow-amber-500/20">
                🎝
              </div>
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-white">
                  HookPrompt Studio
                </h1>
                <p className="text-xs text-slate-500">
                  Récupération & reconstruction du moteur de prompts de HookGenius.app
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="amber">Suno v6</Badge>
              <Badge>2 étapes + critic pass</Badge>
              <Badge>6 couches de style</Badge>
              <a
                href="https://hookgenius.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-amber-300/40 hover:text-amber-200"
              >
                source ↗
              </a>
            </div>
          </div>

          {/* -------- réponse à la demande -------- */}
          <Panel className="mt-6" tone="accent">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Le prompt de HookGenius.app est privé — voici sa reconstruction complète.
                </h2>
                <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-slate-300">
                  HookGenius n'expose pas son prompt système : tout tourne côté serveur. Mais son éditeur
                  documente précisément l'architecture du moteur — un pipeline en deux étapes
                  (<em>passage auteur</em> puis <em>passage producteur</em>) suivi d'un <em>critic-pass</em>,
                  un prompt de style Suno en 6 couches, la décomposition d'influence artiste en ADN sonore,
                  un bloc Exclude Styles et des limites de champs mesurées (lyrics 5 000 / style 1 000 /
                  exclude 1 000 caractères).
                </p>
                <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-slate-400">
                  Cet outil récupère tout ça et le rend opérationnel : le prompt maître en texte intégral
                  avec tes variables déjà injectées, un générateur qui produit le pack prêt à coller dans
                  Suno Custom mode, 28 prompts de bibliothèque copiables, et un inspecteur de conformité.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Format de sortie récupéré
                </div>
                <ul className="mt-2.5 space-y-1.5 font-mono text-[12px] text-slate-300">
                  {['### TITRE', '### STYLE (6 couches)', '### EXCLUDE STYLES', '### LYRICS (tags | indices)', '### NOTES'].map(
                    (x) => (
                      <li key={x} className="text-amber-200/80">
                        {x}
                      </li>
                    ),
                  )}
                </ul>
                <div className="mt-4 border-t border-white/10 pt-3 text-[11px] leading-relaxed text-slate-500">
                  Reconstruction indépendante d'après la documentation publique de hookgenius.app.
                  Aucun accès au code serveur.
                </div>
              </div>
            </div>
          </Panel>

          {/* -------- onglets -------- */}
          <nav className="mt-6 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  'group rounded-xl border px-3.5 py-2 text-left transition',
                  tab === t.id
                    ? 'border-amber-300/40 bg-amber-300/10'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/25',
                )}
              >
                <div className={cn('text-sm font-medium', tab === t.id ? 'text-amber-200' : 'text-slate-300')}>
                  {t.label}
                </div>
                <div className="text-[11px] text-slate-500">{t.hint}</div>
              </button>
            ))}
          </nav>
        </header>

        {/* -------- contenu -------- */}
        <main>
          {tab === 'generate' && (
            <>
              {state.importedStyle && (
                <div className="mb-4 flex flex-wrap items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/[0.07] px-4 py-3">
                  <span className="text-sm text-emerald-200">
                    Style « {state.importedName} » chargé depuis la bibliothèque — les 6 couches affichées
                    viennent de ce texte.
                  </span>
                  <button
                    onClick={() => patch({ importedStyle: '', importedExclude: '', importedName: '' })}
                    className="ml-auto rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 transition hover:border-rose-400/40 hover:text-rose-300"
                  >
                    Revenir au générateur interne
                  </button>
                </div>
              )}
              <Generator state={state} patch={patch} out={out} saved={saved} onSave={onSave} onDelete={onDelete} />
            </>
          )}
          {tab === 'master' && <MasterPromptView master={out.master} />}
          {tab === 'library' && <Library onImport={onImport} />}
          {tab === 'compliance' && <Compliance style={out.style} exclude={out.exclude} lyrics={out.lyrics} />}
        </main>

        {/* -------- pied de page -------- */}
        <footer className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-600">
          <p>
            HookPrompt Studio — outil pédagogique indépendant. Reconstruction du pipeline de prompts de
            HookGenius.app d'après ses pages publiques (accueil, About, FAQ, bibliothèque Suno). Ni affilié
            à HookGenius, ni à Suno : le texte produit ici se colle dans n'importe quel modèle ou dans le
            compositeur Suno Custom mode.
          </p>
          <p className="mt-2">
            Limites mesurées côté Suno v6 : lyrics 5 000 · style 1 000 · exclude styles 1 000 caractères.
            Tes sauvegardes restent dans ce navigateur ({saved.length} en mémoire).
          </p>
          <p className="mt-2">
            {LIBRARY.length} prompts de bibliothèque · {TABS.length} modules · aucun compte requis.
          </p>
        </footer>
      </div>
    </div>
  );
}

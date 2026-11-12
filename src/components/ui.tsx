import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '../utils/cn';

/* ---------- Copie avec fallback ---------- */
export function CopyButton({
  text,
  label = 'Copier',
  className,
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setDone(true);
    timer.current = window.setTimeout(() => setDone(false), 1600);
  };

  return (
    <button
      onClick={copy}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition',
        done
          ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
          : 'border-white/10 bg-white/5 text-slate-300 hover:border-amber-300/40 hover:bg-amber-300/10 hover:text-amber-200',
        className,
      )}
    >
      {done ? '✓ Copié' : `⧉ ${label}`}
    </button>
  );
}

/* ---------- Compteur / jauge ---------- */
export function Meter({ value, limit, label }: { value: number; limit: number; label: string }) {
  const pct = Math.min(100, (value / limit) * 100);
  const state = value > limit ? 'over' : pct > 85 ? 'warn' : 'ok';
  const color =
    state === 'over' ? 'bg-rose-500' : state === 'warn' ? 'bg-amber-400' : 'bg-emerald-400';
  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between text-[11px] uppercase tracking-wider">
        <span className="text-slate-400">{label}</span>
        <span
          className={cn(
            'font-mono',
            state === 'over' ? 'text-rose-400' : state === 'warn' ? 'text-amber-300' : 'text-slate-400',
          )}
        >
          {value} / {limit}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className={cn('h-full rounded-full transition-all duration-500', color)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/* ---------- Panneau ---------- */
export function Panel({
  title,
  right,
  children,
  className,
  tone = 'default',
}: {
  title?: ReactNode;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'accent';
}) {
  return (
    <section
      className={cn(
        'rounded-2xl border p-4 backdrop-blur-sm sm:p-5',
        tone === 'accent'
          ? 'border-amber-300/25 bg-gradient-to-b from-amber-300/[0.07] to-transparent'
          : 'border-white/10 bg-white/[0.03]',
        className,
      )}
    >
      {(title || right) && (
        <header className="mb-3 flex items-center justify-between gap-3">
          {typeof title === 'string' ? (
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{title}</h3>
          ) : (
            title
          )}
          {right}
        </header>
      )}
      {children}
    </section>
  );
}

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="flex items-baseline gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
        {hint && <span className="normal-case tracking-normal text-slate-600">{hint}</span>}
      </span>
      {children}
    </label>
  );
}

const control =
  'w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/15';

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(control, props.className)} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(control, 'resize-y font-mono text-[13px] leading-relaxed', props.className)} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(control, 'appearance-none pr-8', props.className)} />;
}

export function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full border px-3 py-1.5 text-xs font-medium transition',
        active
          ? 'border-amber-300/50 bg-amber-300/15 text-amber-200'
          : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-slate-200',
      )}
    >
      {children}
    </button>
  );
}

export function Code({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <pre
      className={cn(
        'overflow-x-auto whitespace-pre-wrap rounded-xl border border-white/10 bg-slate-950/70 p-3.5 font-mono text-[12.5px] leading-relaxed text-slate-200 selection:bg-amber-300/30',
        className,
      )}
    >
      {children}
    </pre>
  );
}

export function Badge({ children, tone = 'slate' }: { children: ReactNode; tone?: 'slate' | 'amber' | 'emerald' | 'rose' }) {
  const tones = {
    slate: 'border-white/10 bg-white/5 text-slate-300',
    amber: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
    emerald: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
    rose: 'border-rose-400/30 bg-rose-400/10 text-rose-300',
  };
  return (
    <span className={cn('inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider', tones[tone])}>
      {children}
    </span>
  );
}

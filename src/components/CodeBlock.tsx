export function CodeBlock() {
  return (
    <section id="code" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-10">
          <div className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-3">
            // Modular Event-Driven Architecture (C#)
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient">
            Featured Engineering Logic
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            A type-safe Observer pattern I use in production for global game-state events — decoupled UI ↔ gameplay with zero GC churn.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur shadow-2xl glow-card">
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              GameStateObserver.cs <span className="text-primary">●</span>
            </span>
            <span className="font-mono text-xs text-muted-foreground">C#</span>
          </div>

          <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
            <code>
{linesWithNumbers([
  <><span className="tok-key">using</span> <span className="tok-type">System</span>;</>,
  <><span className="tok-key">using</span> <span className="tok-type">UnityEngine</span>;</>,
  <></>,
  <><span className="tok-key">public class</span> <span className="tok-type">GameStateObserver</span> : <span className="tok-type">MonoBehaviour</span> {"{"}</>,
  <>{"    "}<span className="tok-key">public static event</span> <span className="tok-type">Action</span> <span className="tok-fn">OnScoreUpdated</span>;</>,
  <></>,
  <>{"    "}<span className="tok-key">public void</span> <span className="tok-fn">UpdateScore</span>(<span className="tok-key">int</span> newScore) {"{"}</>,
  <>{"        "}<span className="tok-com">// Logic: Perform update, then notify listeners</span></>,
  <>{"        "}<span className="tok-fn">OnScoreUpdated</span>?.<span className="tok-fn">Invoke</span>();</>,
  <>{"    "}{"}"}</>,
  <>{"}"}</>,
])}
            </code>
          </pre>
        </div>
      </div>

      <style>{`
        .tok-key { color: oklch(0.78 0.18 305); }
        .tok-type { color: oklch(0.82 0.16 200); }
        .tok-fn { color: oklch(0.85 0.15 90); }
        .tok-com { color: oklch(0.65 0.04 290); font-style: italic; }
        .tok-num { color: oklch(0.78 0.18 30); }
      `}</style>
    </section>
  );
}

function linesWithNumbers(lines: React.ReactNode[]) {
  return lines.map((node, i) => (
    <div key={i} className="flex">
      <span className="select-none pr-5 text-right text-muted-foreground/50 w-8 shrink-0">{i + 1}</span>
      <span className="flex-1 whitespace-pre">{node}</span>
    </div>
  ));
}

export function SectionLabel({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-mono text-xs text-primary tracking-wider">
        [{id}] / {title}
      </div>
      {subtitle && (
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground max-w-3xl leading-snug">
          {subtitle}
        </h2>
      )}
    </div>
  );
}

export function CodeBlock() {
  return (
    <section id="code" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel id="01" title="featured_logic" subtitle="A type-safe Observer pattern I use in production for global game-state events." />

        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
          {/* Editor chrome */}
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              GameEventBus.cs <span className="text-primary">●</span>
            </span>
            <span className="font-mono text-xs text-muted-foreground">C#</span>
          </div>

          {/* Code */}
          <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
            <code>
{linesWithNumbers([
  <><span className="tok-com">// Type-safe event bus — Observer pattern</span></>,
  <><span className="tok-key">public static class</span> <span className="tok-type">GameEvents</span> {"{"}</>,
  <>{"    "}<span className="tok-key">private static readonly</span> <span className="tok-type">Dictionary</span>{"<"}<span className="tok-type">Type</span>, <span className="tok-type">Delegate</span>{">"} _bus = <span className="tok-key">new</span>();</>,
  <></>,
  <>{"    "}<span className="tok-key">public static void</span> <span className="tok-fn">Subscribe</span>{"<"}<span className="tok-type">T</span>{">"}(<span className="tok-type">Action</span>{"<"}<span className="tok-type">T</span>{">"} handler) <span className="tok-key">where</span> <span className="tok-type">T</span> : <span className="tok-key">struct</span> {"{"}</>,
  <>{"        "}_bus.TryGetValue(<span className="tok-key">typeof</span>(<span className="tok-type">T</span>), <span className="tok-key">out var</span> existing);</>,
  <>{"        "}_bus[<span className="tok-key">typeof</span>(<span className="tok-type">T</span>)] = <span className="tok-type">Delegate</span>.Combine(existing, handler);</>,
  <>{"    "}{"}"}</>,
  <></>,
  <>{"    "}<span className="tok-key">public static void</span> <span className="tok-fn">Raise</span>{"<"}<span className="tok-type">T</span>{">"}(<span className="tok-type">T</span> payload) <span className="tok-key">where</span> <span className="tok-type">T</span> : <span className="tok-key">struct</span> {"{"}</>,
  <>{"        "}<span className="tok-key">if</span> (_bus.TryGetValue(<span className="tok-key">typeof</span>(<span className="tok-type">T</span>), <span className="tok-key">out var</span> d))</>,
  <>{"            "}((<span className="tok-type">Action</span>{"<"}<span className="tok-type">T</span>{">"})d)?.<span className="tok-fn">Invoke</span>(payload);</>,
  <>{"    "}{"}"}</>,
  <>{"}"}</>,
  <></>,
  <><span className="tok-com">// usage — zero GC, decoupled UI ↔ gameplay</span></>,
  <><span className="tok-type">GameEvents</span>.<span className="tok-fn">Raise</span>(<span className="tok-key">new</span> <span className="tok-type">LevelCompleted</span> {"{"} stars = <span className="tok-num">3</span> {"}"});</>,
])}
            </code>
          </pre>
        </div>
      </div>
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

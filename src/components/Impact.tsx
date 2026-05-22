import { SectionLabel } from "./CodeBlock";

const stats = [
  { value: "24M+", label: "downloads", note: "across IQ franchise" },
  { value: "1,000+", label: "levels_shipped", note: "puzzle + narrative" },
  { value: "3+", label: "years_xp", note: "production Unity" },
  { value: "Top 15", label: "play_store_rank", note: "puzzle category" },
];

export function Impact() {
  return (
    <section id="impact" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel id="02" title="impact" subtitle="Numbers from shipped titles — not lab benchmarks." />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-6 md:p-8 transition-colors hover:bg-secondary/40 group">
              <div className="font-mono text-4xl md:text-5xl font-bold text-primary tracking-tight group-hover:[text-shadow:0_0_20px_oklch(0.62_0.22_256/0.5)] transition-all">
                {s.value}
              </div>
              <div className="mt-3 font-mono text-xs text-foreground">{s.label}</div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">// {s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

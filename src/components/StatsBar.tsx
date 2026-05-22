const stats = [
  { value: "24M+", label: "Downloads" },
  { value: "1,000+", label: "Levels Shipped" },
  { value: "3+", label: "Years Experience" },
  { value: "Top 15", label: "Play Store Rank" },
];

export function StatsBar() {
  return (
    <section aria-label="Impact metrics" className="relative border-y border-border/60 bg-background/50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div
                className="font-mono text-3xl md:text-4xl font-bold tracking-tight"
                style={{ color: "#007BFF", textShadow: "0 0 24px rgba(0,123,255,0.45)" }}
              >
                {s.value}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

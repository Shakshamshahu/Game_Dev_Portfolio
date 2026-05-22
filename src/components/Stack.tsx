import { SectionLabel } from "./CodeBlock";

const groups = [
  { label: "languages", items: ["C#", "OOP", "JSON/XML"] },
  { label: "engine", items: ["Unity 2D/3D", "UGUI", "ScriptableObjects"] },
  { label: "patterns", items: ["FSM", "Observer", "Object Pooling", "Singletons"] },
  { label: "ai_physics", items: ["NavMesh", "Raycasting", "2D/3D Physics"] },
  { label: "tools", items: ["Git", "SourceTree", "Visual Studio", "Xcode"] },
  { label: "sdks", items: ["Firebase", "AdMob", "Generative AI"] },
];

export function Stack() {
  return (
    <section id="stack" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel id="04" title="tech_stack" subtitle="What I reach for daily in production." />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g) => (
            <div key={g.label} className="rounded-lg border border-border bg-card p-5">
              <div className="font-mono text-xs text-primary mb-4">// {g.label}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="font-mono text-xs rounded border border-border bg-background px-2.5 py-1 text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

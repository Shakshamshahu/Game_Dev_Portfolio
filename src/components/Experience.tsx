import { SectionLabel } from "./CodeBlock";

const accomplishments = [
  "Engineered backend systems for Detective IQ 1/2/3 + Ghost IQ — combined 24M+ downloads.",
  "Developed & deployed 1,000+ functional puzzle levels with tuned difficulty curves.",
  "Implemented NavMesh-based AI (patrol / chase / attack) optimised for mobile.",
  "Scripted dynamic UI popups (Reward, Level-Complete, Shop) on an event-driven architecture.",
  "Reduced GC allocations via object pooling + ScriptableObject-driven data layers.",
  "Built a type-safe Observer event bus powering global game state & UI updates.",
];

const projects = [
  {
    name: "Detective IQ 3: Lost Future",
    tags: ["narrative", "branching", "input-systems"],
    bullets: [
      "Backend logic for a narrative puzzle game with 50+ cinematic episodes.",
      "Draw-to-solve & erase-to-reveal input mechanics in custom C#.",
      "Choice-based branching that propagates through narrative state.",
    ],
  },
  {
    name: "Ghost IQ: Haunted House Escape",
    tags: ["AI", "NavMesh", "survival"],
    bullets: [
      "Survival logic across Story Mode and Mirror Horror Challenges.",
      "NavMeshAgent enemy pathfinding & engagement in 2D environments.",
    ],
  },
  {
    name: "Pizza IQ · Car Racing Maths · Find the Shadow Face",
    tags: ["edu", "logic", "systems"],
    bullets: [
      "Backend level logic and mathematical gameplay systems for educational titles.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel id="03" title="experience" subtitle="Three years of production Unity at a 24M-user studio." />

        <div className="mt-12 grid lg:grid-cols-[1fr_2fr] gap-10">
          {/* Timeline rail */}
          <div className="relative lg:border-r border-border/60 lg:pr-10">
            <div className="font-mono text-xs text-primary">2022.07 — present</div>
            <h3 className="mt-2 font-mono text-xl font-bold text-foreground">
              Game Developer
            </h3>
            <div className="mt-1 font-mono text-sm text-muted-foreground">
              MindYourLogic Studios · Nagpur
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Shipping modular gameplay systems, AI, and UI logic for the
              studio&apos;s flagship IQ franchise on Android & iOS.
            </p>
          </div>

          <ul className="space-y-3">
            {accomplishments.map((a, i) => (
              <li key={i} className="flex gap-3 rounded border border-border bg-card/50 px-4 py-3 transition-colors hover:border-primary/50">
                <span className="font-mono text-xs text-primary pt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="mt-20">
          <div className="font-mono text-xs text-primary tracking-wider">key_projects/</div>
          <div className="mt-6 grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {projects.map((p) => (
              <article key={p.name} className="bg-card p-6 hover:bg-secondary/40 transition-colors">
                <h4 className="font-mono text-base font-bold text-foreground leading-tight">
                  {p.name}
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-primary border border-primary/40 px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-0.5">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

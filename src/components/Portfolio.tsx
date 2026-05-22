const projects = [
  {
    title: "Detective IQ",
    icon: "🕵️",
    gradient: "from-amber-500/40 to-orange-500/30",
    desc:
      "Skill-based mobile puzzle game featuring 15+ unique gameplay modes, detective progression, and a full meta-game. Players master different skills, level up through cases, and solve crimes.",
    tags: ["Unity", "C#", "Mobile", "Puzzle"],
    challenges: [
      "Refactored core gameplay loops to reduce GC allocations using object pooling and event-driven patterns.",
      "Wired Firebase Remote Config + Analytics to A/B test difficulty curves across 24M+ installs.",
    ],
    playStore:
      "https://play.google.com/store/search?q=Detective+IQ+MindYourLogic&c=apps",
  },
  {
    title: "Detective IQ 2",
    icon: "🧩",
    gradient: "from-violet-500/40 to-fuchsia-500/30",
    desc:
      "Narrative-driven puzzle sequel featuring choice-driven story levels where player decisions create branching outcomes. Includes erase-style puzzles, physics missions, and cinematic episodes.",
    tags: ["Unity", "C#", "Narrative", "Android"],
    challenges: [
      "Architected a branching narrative system using C# and ScriptableObjects to manage state-driven cinematic episodes.",
      "Built an authoring pipeline so designers ship episodes without touching code.",
    ],
    playStore:
      "https://play.google.com/store/search?q=Detective+IQ+2+MindYourLogic&c=apps",
  },
  {
    title: "Detective IQ 3: Lost Future",
    icon: "🔍",
    gradient: "from-cyan-500/40 to-blue-500/30",
    desc:
      "Third installment in the Detective IQ series, integrating three core mechanics — Erase, Draw, and Two-Option Story — into a cohesive detective experience. Led the project as backend engineer.",
    tags: ["Unity", "C#", "Input Systems", "iOS"],
    challenges: [
      "Implemented draw-to-solve & erase-to-reveal input mechanics in custom C#.",
      "Choice-based branching that propagates through global narrative state.",
    ],
    playStore:
      "https://play.google.com/store/search?q=Detective+IQ+3+Lost+Future&c=apps",
  },
  {
    title: "Ghost IQ: Haunted House Escape",
    icon: "👻",
    gradient: "from-indigo-500/40 to-purple-500/30",
    desc:
      "Survival horror with NavMesh enemy AI, patrol / chase / attack states, and multiple gameplay modes including Story Mode and Mirror Horror Challenges.",
    tags: ["Unity", "NavMesh AI", "FSM", "Survival"],
    challenges: [
      "Implemented NavMesh-based AI with finite state machines to optimize enemy pathfinding in 2D on mobile.",
      "Designed Mirror Horror mode with a reflected-world solver running in a single update tick.",
    ],
    playStore:
      "https://play.google.com/store/search?q=Ghost+IQ+Haunted+House+Escape&c=apps",
  },
];

export function Portfolio() {
  return (
    <section id="project" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A collection of games I&apos;ve designed, engineered, and shipped —
            from solo builds to team-led productions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glow-card rounded-2xl overflow-hidden flex flex-col group"
            >
              <div
                className={`h-48 bg-gradient-to-br ${p.gradient} relative grid place-items-center overflow-hidden`}
              >
                <span className="text-7xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
                  {p.icon}
                </span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,oklch(0.18_0.05_285/0.6))]" />
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 border border-border/60 text-2xl">
                    {p.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {p.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>

                <div className="rounded-lg border border-border/60 bg-background/30 p-4">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-accent mb-2">
                    // Engineering Challenges
                  </div>
                  <ul className="space-y-2">
                    {p.challenges.map((c) => (
                      <li
                        key={c}
                        className="flex gap-2 font-mono text-[12px] leading-relaxed text-foreground/85"
                      >
                        <span className="text-primary shrink-0">▸</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 mt-auto pt-2">
                  <a
                    href={p.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-xs font-semibold text-foreground hover:bg-white/10 transition-colors"
                  >
                    ▶ Android
                  </a>
                  <a
                    href={p.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold"
                  >
                    Explore →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

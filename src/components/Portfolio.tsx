const projects = [
  {
    title: "Detective IQ 3: Lost Future",
    icon: "🔍",
    gradient: "from-violet-500/40 to-fuchsia-500/30",
    desc: "Narrative puzzle game with 50+ cinematic episodes. Draw-to-solve & erase-to-reveal mechanics, branching choice system.",
    tags: ["Unity", "C#", "Narrative", "Android", "iOS"],
  },
  {
    title: "Ghost IQ: Haunted House Escape",
    icon: "👻",
    gradient: "from-indigo-500/40 to-purple-500/30",
    desc: "Survival horror with NavMesh enemy AI, patrol / chase / attack states, and multiple gameplay modes including Mirror Horror.",
    tags: ["Unity", "NavMesh AI", "C#", "FSM"],
  },
  {
    title: "Detective IQ Franchise",
    icon: "🧩",
    gradient: "from-cyan-500/40 to-blue-500/30",
    desc: "Backend architecture across Detective IQ 1, 2 & 3 — combined 24M+ downloads, Top 15 in Google Play Puzzle category.",
    tags: ["Unity", "Firebase", "Backend", "Mobile"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient">Portfolio</h2>
          <p className="mt-3 text-muted-foreground">Showcasing my latest game development projects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article key={p.title} className="glow-card rounded-2xl overflow-hidden">
              <div className={`h-40 bg-gradient-to-br ${p.gradient} relative grid place-items-center`}>
                <span className="text-6xl drop-shadow-lg">{p.icon}</span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,oklch(0.18_0.05_285/0.6))]" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

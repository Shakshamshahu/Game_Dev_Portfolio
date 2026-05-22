const services = [
  {
    icon: "🎮",
    title: "Game Development",
    desc: "End-to-end Unity development for mobile — from gameplay prototypes to App Store releases.",
  },
  {
    icon: "🧠",
    title: "AI & Systems",
    desc: "NavMesh-driven enemy behaviour, FSMs, and event-driven architecture optimised for mobile.",
  },
  {
    icon: "⚙️",
    title: "Backend Architecture",
    desc: "Modular C# systems, ScriptableObject data layers, object pooling, and zero-GC event buses.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient">Services</h2>
          <p className="mt-3 text-muted-foreground">What I build, ship, and scale.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className="glow-card rounded-2xl overflow-hidden group">
              <div className="h-32 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 grid place-items-center text-5xl">
                {s.icon}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

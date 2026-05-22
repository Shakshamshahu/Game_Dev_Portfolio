const skills = ["Unity", "C#", "NavMesh AI", "Firebase", "OOP", "FSM", "ScriptableObjects", "Mobile Games", "Backend", "Object Pooling"];

const stats = [
  { icon: "🎮", value: "24M+", label: "Downloads" },
  { icon: "🧩", value: "1,000+", label: "Levels Shipped" },
  { icon: "🏆", value: "Top 15", label: "Play Store Rank" },
  { icon: "⚡", value: "3+", label: "Years Experience" },
];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="glow-card rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">⭐</span>
            <h2 className="font-display text-2xl font-bold text-accent">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <div>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3"><span>🎮</span><span>Passionate Unity developer building immersive mobile experiences.</span></li>
                <li className="flex gap-3"><span>⚡</span><span>3+ years shipping production C# systems at MindYourLogic Studios.</span></li>
                <li className="flex gap-3"><span>🚀</span><span>From puzzle mechanics to NavMesh AI — any game system, any genre.</span></li>
                <li className="flex gap-3"><span>🧩</span><span>Architected modular backends powering 24M+ downloads.</span></li>
              </ul>

              <div className="mt-8">
                <div className="font-display text-sm font-semibold text-accent mb-3">Skills & Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-background/40 p-5 text-center hover:border-primary/50 transition-colors">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="font-display text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section id="top" className="stars relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        {/* Left */}
        <div className="relative">
          <div className="inline-flex items-center gap-2 chip">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Available for game dev projects
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary p-[2px]">
              <div className="h-full w-full rounded-2xl bg-background/80 grid place-items-center text-2xl">🎮</div>
            </div>
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-gradient leading-none">
                Shaksham
              </h1>
              <div className="font-display text-xs uppercase tracking-[0.3em] text-accent mt-1">Unity Game Developer</div>
            </div>
          </div>

          <h2 className="mt-10 font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Passionate Game Developer
          </h2>

          <div className="mt-4 flex items-center gap-2 text-muted-foreground">
            <span className="text-accent">📍</span>
            <span className="text-sm">Nagpur, India</span>
          </div>

          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            Crafting immersive mobile gameplay with{" "}
            <span className="text-accent font-semibold">3+ years</span> of expertise.
            From puzzle worlds to NavMesh-driven haunted houses — shipping titles
            with <span className="text-accent font-semibold">24M+ downloads</span> on
            the Detective IQ & Ghost IQ franchises.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#project" className="btn-primary rounded-full px-6 py-3 text-sm font-semibold">
              View Portfolio →
            </a>
            <a href="#contact" className="rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        {/* Right - game console card */}
        <div className="relative h-[420px] hidden lg:block">
          {/* Orbiting icons */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative h-[380px] w-[380px] rounded-full border border-primary/20"
                 style={{ background: 'radial-gradient(circle at center, oklch(0.72 0.20 305 / 0.18), transparent 65%)' }}>
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-2xl float">🔥</span>
              <span className="absolute top-12 right-2 text-2xl float" style={{ animationDelay: '0.5s' }}>🎮</span>
              <span className="absolute bottom-16 right-0 text-2xl float" style={{ animationDelay: '1s' }}>⭐</span>
              <span className="absolute bottom-4 left-1/3 text-2xl float" style={{ animationDelay: '1.5s' }}>⚡</span>
              <span className="absolute top-1/2 left-0 text-2xl float" style={{ animationDelay: '2s' }}>🏆</span>
              <span className="absolute top-6 right-1/3 text-xl float" style={{ animationDelay: '2.5s' }}>{"</>"}</span>

              {/* Center console */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-44 w-44 rounded-3xl bg-gradient-to-br from-background to-secondary border-2 border-accent shadow-[0_0_60px_oklch(0.80_0.16_200/0.45)] grid place-items-center">
                  <span className="text-6xl">👾</span>
                  <span className="absolute top-3 right-3 text-accent text-xs font-mono">{"</>"}</span>
                  <span className="absolute bottom-3 left-3 text-primary text-xs font-mono">⚡</span>
                </div>
              </div>

              {/* LVL badge */}
              <div className="absolute -top-3 right-8 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 font-display text-xs font-bold text-white shadow-lg">
                LVL 99
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-2 rounded-full bg-secondary overflow-hidden">
            <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-accent to-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

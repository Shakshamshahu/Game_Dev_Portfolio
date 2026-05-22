export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
        <div className="font-mono text-xs text-muted-foreground mb-6 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span>// available_for_hire = true;</span>
        </div>

        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
          Shaksham Shahu
          <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-normal mt-3">
            <span className="text-primary">{">"}</span> Unity & Backend Engineer
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Architecting high-performance gameplay for{" "}
          <span className="text-primary font-medium">24M+ users</span>. Three years
          shipping modular C# systems, NavMesh AI, and memory-efficient mobile
          titles across the Detective IQ & Ghost IQ franchises.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded border border-primary bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_24px_oklch(0.62_0.22_256/0.55)]"
          >
            view_work() <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded border border-border bg-transparent px-5 py-2.5 font-mono text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            ./contact.sh
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-muted-foreground">
          <span><span className="text-primary">location:</span> Nagpur, IN</span>
          <span><span className="text-primary">studio:</span> MindYourLogic</span>
          <span><span className="text-primary">stack:</span> C# · Unity · Firebase</span>
        </div>
      </div>
    </section>
  );
}

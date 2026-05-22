export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/40">
          <span className="font-display text-lg font-bold">🎮</span>
        </div>
        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background" />
      </div>
      <div className="leading-tight">
        <div className="font-display text-base font-bold text-foreground">Shaksham</div>
        <div className="font-display text-[10px] uppercase tracking-[0.18em] text-accent">Game Dev</div>
      </div>
    </div>
  );
}

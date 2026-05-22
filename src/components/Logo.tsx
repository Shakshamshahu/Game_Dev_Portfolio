export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-mono ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded border border-primary/40 bg-primary/10 text-primary font-bold text-sm leading-none">
        {"{ }"}
      </span>
      <span className="text-sm tracking-tight">
        <span className="text-foreground font-semibold">shaksham</span>
        <span className="text-primary">.dev</span>
      </span>
    </div>
  );
}

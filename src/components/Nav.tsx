import { Logo } from "./Logo";

const links = [
  { href: "#about", label: "about" },
  { href: "#code", label: "code" },
  { href: "#impact", label: "impact" },
  { href: "#experience", label: "experience" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Home"><Logo /></a>
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded px-3 py-1.5 text-muted-foreground transition-colors hover:text-primary hover:bg-primary/5"
            >
              <span className="text-primary">/</span>{l.label}
            </a>
          ))}
        </nav>
        <a
          href="/Shaksham_Shahu_Resume.docx"
          download
          className="hidden sm:inline-flex items-center gap-2 rounded border border-primary bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_oklch(0.62_0.22_256/0.5)]"
        >
          <span>↓</span> resume.docx
        </a>
      </div>
    </header>
  );
}

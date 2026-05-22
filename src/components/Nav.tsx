import { Logo } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/30 border-b border-border/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Home"><Logo /></a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="/Shaksham_Shahu_Resume.docx" download
          className="hidden sm:inline-flex items-center gap-2 rounded-full btn-primary px-5 py-2 text-sm font-semibold">
          ↓ Resume
        </a>
      </div>
    </header>
  );
}

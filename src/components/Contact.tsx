import { SectionLabel } from "./CodeBlock";

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel id="05" title="contact" subtitle="Open to senior Unity / gameplay / backend roles." />

        <div className="mt-10 grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
          <a
            href="mailto:Shakshamshahu123@gmail.com"
            className="bg-card p-8 hover:bg-secondary/40 transition-colors group"
          >
            <div className="font-mono text-xs text-primary mb-2">// email</div>
            <div className="font-mono text-lg md:text-xl text-foreground group-hover:text-primary transition-colors break-all">
              Shakshamshahu123@gmail.com
            </div>
            <div className="mt-4 font-mono text-xs text-muted-foreground">→ send_message()</div>
          </a>
          <a
            href="tel:+917758957946"
            className="bg-card p-8 hover:bg-secondary/40 transition-colors group"
          >
            <div className="font-mono text-xs text-primary mb-2">// phone</div>
            <div className="font-mono text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
              +91 7758 957 946
            </div>
            <div className="mt-4 font-mono text-xs text-muted-foreground">→ call()</div>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-primary/40 bg-primary/5 px-6 py-5">
          <div>
            <div className="font-mono text-sm text-foreground">
              Want the long-form version?
            </div>
            <div className="font-mono text-xs text-muted-foreground mt-1">
              Full resume — experience, projects, certifications.
            </div>
          </div>
          <a
            href="/Shaksham_Shahu_Resume.docx"
            download
            className="inline-flex items-center gap-2 rounded border border-primary bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_24px_oklch(0.62_0.22_256/0.55)]"
          >
            ↓ download_resume.docx
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="font-mono text-xs text-muted-foreground">
          © 2026 Shaksham Shahu · built with C#-grade discipline.
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo &quot;thanks for scrolling&quot;
        </div>
      </div>
    </footer>
  );
}

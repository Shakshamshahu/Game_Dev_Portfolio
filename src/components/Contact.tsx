export function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="glow-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative">
            <div className="inline-block text-5xl mb-4 float">🚀</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
              Let&apos;s build something epic
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Open to senior Unity, gameplay, and backend engineering roles —
              and freelance collaborations on ambitious mobile titles.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="mailto:Shakshamshahu123@gmail.com"
                className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                ✉️ Shakshamshahu123@gmail.com
              </a>
              <a href="/Shaksham_Shahu_Resume.docx" download
                className="rounded-full border border-border bg-white/5 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                ↓ Download Resume
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
              <span>📍 Nagpur, India</span>
              <span>📞 +91 7758 957 946</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-10">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3 font-mono text-xs">
        <div className="space-y-2">
          <div className="text-foreground font-semibold tracking-wider uppercase">Shaksham Shahu</div>
          <div className="text-muted-foreground">Unity Game Developer · Nagpur, India</div>
          <div className="text-muted-foreground">© 2026 · Built with Unity & React.</div>
        </div>

        <div className="space-y-2">
          <div className="text-accent uppercase tracking-[0.2em]">// Professional Repositories</div>
          <ul className="space-y-1.5">
            <li>
              <a href="https://github.com/Shakshamshahu" target="_blank" rel="noopener noreferrer"
                className="text-foreground/85 hover:text-primary transition-colors inline-flex items-center gap-2">
                <span>↗</span> GitHub — github.com/Shakshamshahu
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shaksham-shahu/" target="_blank" rel="noopener noreferrer"
                className="text-foreground/85 hover:text-primary transition-colors inline-flex items-center gap-2">
                <span>↗</span> LinkedIn — Professional Profile
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-accent uppercase tracking-[0.2em]">// Contact</div>
          <ul className="space-y-1.5 text-muted-foreground">
            <li><a href="mailto:Shakshamshahu123@gmail.com" className="hover:text-primary transition-colors">Shakshamshahu123@gmail.com</a></li>
            <li>+91 7758 957 946</li>
            <li><a href="/Shaksham_Shahu_Resume.docx" download className="hover:text-primary transition-colors">↓ Download Resume</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

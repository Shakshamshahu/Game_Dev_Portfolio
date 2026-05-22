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
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© 2026 Shaksham Shahu · Crafted with ⚡ in Unity & React.</div>
        <div>Press <kbd className="rounded border border-border bg-white/5 px-1.5 py-0.5 text-foreground">▲</kbd> to level up</div>
      </div>
    </footer>
  );
}

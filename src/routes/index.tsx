import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { CodeBlock } from "@/components/CodeBlock";
import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shaksham Shahu — Unity Game Developer" },
      {
        name: "description",
        content:
          "Passionate Unity game developer crafting immersive mobile experiences. 24M+ downloads across the Detective IQ & Ghost IQ franchises.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Portfolio />
      <CodeBlock />
      <Contact />
      <Footer />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CodeBlock } from "@/components/CodeBlock";
import { Impact } from "@/components/Impact";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shaksham Shahu — Unity & Backend Engineer" },
      {
        name: "description",
        content:
          "Senior Unity game developer architecting high-performance C# gameplay systems for 24M+ users. NavMesh AI, modular backend, mobile optimisation.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <CodeBlock />
      <Impact />
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}

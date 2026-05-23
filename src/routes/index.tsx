import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { CodeBlock } from "@/components/CodeBlock";
import { Contact, Footer } from "@/components/Contact";

const PAGE_TITLE = "Shaksham Shahu — Unity Game Developer";
const PAGE_DESCRIPTION =
  "Passionate Unity game developer crafting immersive mobile experiences. 24M+ downloads across the Detective IQ & Ghost IQ franchises.";
const PAGE_URL = "https://shaksham-shahu-portfolio.lovable.app/";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Shaksham Shahu",
          jobTitle: "Unity Game Developer",
          url: PAGE_URL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nagpur",
            addressCountry: "IN",
          },
          knowsAbout: ["Unity", "C#", "Backend Architecture"],
          sameAs: [
            "https://github.com/Shakshamshahu",
            "https://www.linkedin.com/in/shaksham-shahu/",
          ],
        }),
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

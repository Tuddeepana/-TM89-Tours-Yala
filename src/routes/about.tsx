import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/sections/PageHeader";
import { About as AboutSection } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${siteConfig.name}` },
      { name: "description", content: `Family-run Sri Lankan taxi & tour company since 2013. 30+ licensed drivers, islandwide coverage, 1,200+ five-star reviews.` },
      { property: "og:title", content: `About — ${siteConfig.name}` },
      { property: "og:description", content: "Family-run Sri Lankan taxi & tour company since 2013." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Our story" title="A decade of moving Sri Lanka travellers" subtitle="From a single Toyota Premio in 2013 to a fleet of 30+ vehicles serving every corner of the island." />
      <AboutSection />
      <Features />
    </SiteShell>
  );
}

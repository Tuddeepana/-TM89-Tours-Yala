import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Destinations } from "@/components/sections/Destinations";
import { CustomTour } from "@/components/sections/CustomTour";
import { Fleet } from "@/components/sections/Fleet";
import { Reviews } from "@/components/sections/Reviews";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/config/site";
import { localBusinessSchema } from "@/config/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — ${siteConfig.tagline}` },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: `${siteConfig.name} — ${siteConfig.tagline}` },
      { property: "og:description", content: siteConfig.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessSchema) }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <Features />
      <Destinations />
      <CustomTour />
      <Fleet />
      <Reviews />
      <About />
      <Contact />
    </SiteShell>
  );
}

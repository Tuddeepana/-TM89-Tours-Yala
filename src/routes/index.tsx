import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Destinations } from "@/components/sections/Destinations";
import { CustomTour } from "@/components/sections/CustomTour";
import { Fleet } from "@/components/sections/Fleet";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/config/site";
import { localBusinessSchema, seoDefaults } from "@/config/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seoDefaults.defaultTitle },
      { name: "description", content: seoDefaults.description },
      { name: "keywords", content: seoDefaults.keywords.join(", ") },
      { property: "og:title", content: seoDefaults.defaultTitle },
      { property: "og:description", content: seoDefaults.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: seoDefaults.url },
      { property: "og:image", content: seoDefaults.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: seoDefaults.url }],
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
      <Gallery />
      <Fleet />
      <Reviews />
      <About />
      <Contact />
    </SiteShell>
  );
}

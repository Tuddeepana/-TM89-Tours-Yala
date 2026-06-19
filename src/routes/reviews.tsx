import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reviews as ReviewsSection } from "@/components/sections/Reviews";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: `Reviews — ${siteConfig.name}` },
      { name: "description", content: `Read 1,200+ verified five-star Google reviews from international travellers who chose ${siteConfig.name} for Sri Lanka airport transfers and tours.` },
      { property: "og:title", content: `Reviews — ${siteConfig.name}` },
      { property: "og:description", content: "4.9-star reviews from real travellers across the world." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Reviews" title="4.9 stars from real travellers" subtitle="We're proud of every single review. Here's what our guests say after their trips." />
      <ReviewsSection />
    </SiteShell>
  );
}

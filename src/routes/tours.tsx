import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/sections/PageHeader";
import { Destinations } from "@/components/sections/Destinations";
import { CustomTour } from "@/components/sections/CustomTour";
import { Fleet } from "@/components/sections/Fleet";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/config/site";

const packages = [
  { title: "Cultural Triangle · 3 days", places: "Sigiriya · Dambulla · Polonnaruwa · Kandy", price: "from Rs. 78,000" },
  { title: "Hill Country · 4 days", places: "Kandy · Nuwara Eliya · Ella · Nine Arches Bridge", price: "from Rs. 96,000" },
  { title: "Wildlife & Beach · 5 days", places: "Yala safari · Tissamaharama · Mirissa · Galle", price: "from Rs. 120,000" },
  { title: "Grand Tour · 9 days", places: "Negombo → Sigiriya → Kandy → Ella → Yala → Mirissa → Galle", price: "from Rs. 215,000" },
];

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: `Sri Lanka Tour Packages — ${siteConfig.name}` },
      { name: "description", content: "Private Sri Lanka tours with your own driver-guide. 3-, 5-, 7- and 9-day packages, or fully custom. Free planning, fixed prices, no hidden fees." },
      { property: "og:title", content: `Sri Lanka Tour Packages — ${siteConfig.name}` },
      { property: "og:description", content: "Private multi-day Sri Lanka tours. Book on WhatsApp." },
      { property: "og:url", content: "/tours" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
  component: Tours,
});

function Tours() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Tours"
        title="Private Sri Lanka tours, your own driver-guide"
        subtitle="Hand-built itineraries with a single English-speaking driver from arrival to departure. Pick a package or design your own."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((p) => (
              <div key={p.title} className="hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="text-xs font-bold uppercase tracking-wider text-secondary">{p.price}</div>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.places}</p>
                <a
                  href={buildWhatsAppUrl(`Hi, I'm interested in the "${p.title}" tour.`)}
                  target="_blank" rel="noopener"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl gradient-primary px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  Enquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Destinations />
      <CustomTour />
      <Fleet />
    </SiteShell>
  );
}

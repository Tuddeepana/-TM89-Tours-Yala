import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/sections/PageHeader";
import { BookingForm } from "@/components/booking/BookingForm";
import { ridePricing, formatLKR, vehicles, type VehicleType } from "@/config/pricing";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/airport-transfers")({
  head: () => ({
    meta: [
      { title: `Airport Transfers — ${siteConfig.name}` },
      { name: "description", content: "Fixed-price Bandaranaike Airport (CMB) transfers to Colombo, Kandy, Galle, Ella, Yala, Mirissa and Sigiriya. Meet-and-greet, free 60-min wait, 24/7 booking." },
      { property: "og:title", content: `Airport Transfers — ${siteConfig.name}` },
      { property: "og:description", content: "Fixed-price airport transfers across Sri Lanka. Book on WhatsApp." },
      { property: "og:url", content: "/airport-transfers" },
    ],
    links: [{ rel: "canonical", href: "/airport-transfers" }],
  }),
  component: AirportTransfers,
});

function AirportTransfers() {
  const airportPricing = ridePricing["Colombo Airport (BIA)"] || {};
  const routes = Object.keys(airportPricing);

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Airport transfers"
        title="Fixed-price pickups from Bandaranaike Airport"
        subtitle="Meet-and-greet at arrivals, named name card, free 60-minute wait. Quote on WhatsApp in under 2 minutes."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Popular routes from CMB</h2>
            {/* Desktop Table View */}
            <div className="hidden md:block mt-6 overflow-auto max-h-[500px] rounded-2xl border border-border bg-card shadow-soft relative">
              <table className="w-full text-sm whitespace-nowrap">
                <thead className="sticky top-0 z-20 bg-muted text-ink/70 shadow-sm">
                  <tr>
                    <th className="sticky left-0 z-30 bg-muted px-4 py-3 text-left font-semibold border-r border-border">Destination</th>
                    {vehicles.map((v) => (
                      <th key={v} className="px-4 py-3 text-right font-semibold">{v}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {routes.map((dest) => (
                    <tr key={dest} className="group border-t border-border hover:bg-muted/30 transition-colors">
                      <td className="sticky left-0 z-10 bg-card px-4 py-3 font-medium text-ink border-r border-border group-hover:bg-muted/30 transition-colors">
                        {dest}
                      </td>
                      {vehicles.map((v) => {
                        const price = airportPricing[dest]?.[v as VehicleType];
                        return (
                          <td key={v} className="px-4 py-3 text-right text-ink/85">
                            {price ? formatLKR(price) : "—"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden mt-6 flex flex-col gap-4 overflow-y-auto max-h-[500px] pr-1 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
              {routes.map((dest) => (
                <div key={dest} className="bg-card rounded-2xl border border-border p-5 shadow-soft">
                  <h3 className="font-semibold text-lg text-ink mb-4">{dest}</h3>
                  <div className="space-y-3 text-sm">
                    {vehicles.map((v) => {
                      const price = airportPricing[dest]?.[v as VehicleType];
                      if (!price) return null;
                      return (
                        <div key={v} className="flex items-center justify-between border-b border-border/40 pb-2 last:border-0 last:pb-0">
                          <span className="text-ink/70 font-medium">{v}</span>
                          <span className="font-semibold text-ink">{formatLKR(price)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              All prices in LKR. Includes fuel, driver, expressway tolls and parking. Night surcharge may apply between 11pm–5am.
            </p>
          </div>

          <div className="lg:col-span-2">
            <BookingForm variant="page" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

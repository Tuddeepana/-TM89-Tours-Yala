import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/sections/PageHeader";
import { BookingForm } from "@/components/booking/BookingForm";
import { pricing, formatLKR } from "@/config/pricing";
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
  const fromAirport = pricing.filter((p) => p.pickup === "Bandaranaike Airport");
  const routes = Array.from(new Set(fromAirport.map((p) => p.drop)));

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
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <table className="w-full text-sm">
                <thead className="bg-muted/60 text-ink/70">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Destination</th>
                    <th className="px-4 py-3 text-right font-semibold">Mini</th>
                    <th className="px-4 py-3 text-right font-semibold">Sedan</th>
                    <th className="px-4 py-3 text-right font-semibold">KDH Flat</th>
                    <th className="px-4 py-3 text-right font-semibold">KDH High</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((dest) => (
                    <tr key={dest} className="border-t border-border">
                      <td className="px-4 py-3 font-medium text-ink">{dest}</td>
                      {(["Mini Car", "Sedan", "KDH Flat Roof", "KDH High Roof"] as const).map((v) => {
                        const r = fromAirport.find((x) => x.drop === dest && x.vehicle === v);
                        return (
                          <td key={v} className="px-4 py-3 text-right text-ink/85">
                            {r ? formatLKR(r.price) : "—"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
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

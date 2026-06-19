import { Briefcase, Snowflake, Users } from "lucide-react";
import mini from "@/assets/vehicle-mini.jpg";
import sedan from "@/assets/vehicle-sedan.jpg";
import kdhFlat from "@/assets/vehicle-kdh-flat.jpg";
import kdhHigh from "@/assets/vehicle-kdh-high.jpg";
import { vehicles } from "@/config/pricing";

const images: Record<string, string> = {
  "Mini Car": mini,
  "Sedan": sedan,
  "KDH Flat Roof": kdhFlat,
  "KDH High Roof": kdhHigh,
};

export function Fleet() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our fleet</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Right-sized vehicles for every group.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From solo travellers to extended families. Every vehicle is under 5 years old, A/C, and serviced monthly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((v) => (
            <div key={v.type} className="hover-lift rounded-3xl border border-border bg-card overflow-hidden shadow-soft">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={images[v.type]} alt={v.type} loading="lazy" width={1024} height={768}
                     className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-ink">{v.type}</h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-primary" /> {v.passengers} pax</span>
                  <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-primary" /> {v.luggage} bags</span>
                  <span className="inline-flex items-center gap-1.5"><Snowflake className="h-3.5 w-3.5 text-primary" /> A/C</span>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-ink/80">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

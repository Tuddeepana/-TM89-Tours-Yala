import { Briefcase, Snowflake, Users } from "lucide-react";
import kdhFlat from "@/assets/vehicle-kdh-flat.jpg";
import kdhHigh from "@/assets/vehicle-kdh-high.jpg";
type FleetVehicle = {
  type: string;
  passengers: number;
  luggage: number;
  features: string[];
};

const fleetVehicles: FleetVehicle[] = [
  { type: "MINI CAR", passengers: 3, luggage: 2, features: ["Air conditioning", "Fuel efficient", "City rides"] },
  { type: "SEDAN", passengers: 4, luggage: 3, features: ["Air conditioning", "Leather interior", "Long distance"] },
  { type: "MINI VAN", passengers: 6, luggage: 5, features: ["Air conditioning", "Spacious", "Family travel"] },
  { type: "KDH FLAT ROOF", passengers: 9, luggage: 8, features: ["Air conditioning", "Reclining seats", "Group travel"] },
  { type: "KDH HIGH ROOF", passengers: 12, luggage: 12, features: ["Air conditioning", "Stand-up cabin", "Premium tours"] },
];

const images: Record<string, string> = {
  "MINI CAR": "/mini.jpeg",
  "SEDAN": "/sedan.jpeg",
  "MINI VAN": kdhFlat, // Fallback image for mini van
  "KDH FLAT ROOF": kdhFlat,
  "KDH HIGH ROOF": kdhHigh,
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {fleetVehicles.map((v) => (
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

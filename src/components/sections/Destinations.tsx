import { ArrowUpRight } from "lucide-react";
import yala from "@/assets/dest-yala.jpg";
import mirissa from "@/assets/dest-mirissa.jpg";
import ella from "@/assets/dest-ella.jpg";
import sigiriya from "@/assets/dest-sigiriya.jpg";
import { buildWhatsAppUrl } from "@/config/site";

const destinations = [
  { name: "Yala National Park", img: yala, desc: "Track leopards at dawn in Asia's densest big-cat density.", tag: "Wildlife" },
  { name: "Mirissa", img: mirissa, desc: "Blue whales offshore, palm-fringed crescent beach onshore.", tag: "Coast" },
  { name: "Ella", img: ella, desc: "Nine Arches Bridge, misty tea country and the iconic blue train.", tag: "Hill country" },
  { name: "Sigiriya", img: sigiriya, desc: "1,500-year-old rock fortress rising 200m from the jungle.", tag: "Heritage" },
];

export function Destinations() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Popular destinations</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Where Sri Lanka travellers ask us to take them.
            </h2>
          </div>
          <a
            href={buildWhatsAppUrl("Hi, I'd like to plan a multi-destination Sri Lanka tour.")}
            target="_blank" rel="noopener"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow"
          >
            Plan a tour <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <article key={d.name} className="hover-lift group relative overflow-hidden rounded-3xl bg-card shadow-soft">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="inline-block rounded-full bg-secondary/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink">
                  {d.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold">{d.name}</h3>
                <p className="mt-1 text-sm text-white/85">{d.desc}</p>
                <a
                  href={buildWhatsAppUrl(`Hi, I'd like to visit ${d.name}.`)}
                  target="_blank" rel="noopener"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary"
                >
                  Explore <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

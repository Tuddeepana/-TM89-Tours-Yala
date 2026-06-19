import { Star } from "lucide-react";

const reviews = [
  { name: "Sophie L.", country: "United Kingdom", text: "Booked from Heathrow on WhatsApp. Driver was waiting with a name card at 1am. Cleanest van I've ever sat in.", rating: 5 },
  { name: "Markus K.", country: "Germany", text: "Did a 9-day tour Colombo → Sigiriya → Kandy → Ella → Yala → Mirissa. Pricing was exactly what we agreed. Highly recommend.", rating: 5 },
  { name: "Aiko T.", country: "Japan", text: "The driver spoke perfect English and knew every photo spot in Ella. Felt completely safe as a solo female traveller.", rating: 5 },
  { name: "Priya R.", country: "Singapore", text: "We were 9 adults — the KDH high roof was super comfortable for the long drive to Yala. Will book again.", rating: 5 },
];

export function Reviews() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What travellers say</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              4.9 stars from 1,247 Google reviews.
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">4.9 / 5</span>
            </div>
            <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-ink hover:border-primary hover:text-primary transition">
              Read all reviews on Google
            </a>
          </div>

          <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.name} className="hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-ink/85">"{r.text}"</blockquote>
                <figcaption className="mt-4 text-sm">
                  <div className="font-semibold text-ink">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.country}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

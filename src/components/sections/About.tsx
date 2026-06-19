import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              A family-run taxi company on a mission to make Sri Lanka effortless.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded in Tissamaharama on the doorstep of Yala National Park, {siteConfig.name} has been moving international travellers across the island for over a decade. Every driver on the team is licensed, English-speaking, and personally trained by our founder.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We don't run on apps or meters. We run on word-of-mouth and 1,200+ five-star reviews — and we'd love to add yours.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.stats.map((s) => (
              <div key={s.label} className="hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="font-display text-4xl font-bold gradient-primary bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

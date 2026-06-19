import { BadgeCheck, Clock, PlaneLanding, Shield, ThumbsUp, Wallet } from "lucide-react";

const items = [
  { icon: BadgeCheck, title: "Professional drivers", desc: "Licensed, English-speaking, deeply local. Average 8+ years on Sri Lankan roads." },
  { icon: Wallet, title: "Fixed transparent pricing", desc: "Quote on WhatsApp, pay the same in the car. No meters, no surge, no surprises." },
  { icon: PlaneLanding, title: "Airport pickup", desc: "Free 60-min wait, named meet-and-greet, bottled water and SIM available on request." },
  { icon: Clock, title: "24/7 customer support", desc: "Real humans answer in under 2 minutes — even on the late flight from Doha." },
  { icon: Shield, title: "Fully insured vehicles", desc: "Comprehensive passenger insurance and regular technical inspections." },
  { icon: ThumbsUp, title: "Comfortable travel", desc: "Air-con tuned for the heat, reclining seats and Wi-Fi on KDH vans." },
];

export function Features() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why travellers choose us</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            A premium taxi company, the islander way.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We built TM89 Tours Yala for travellers who expect international standards — without losing the warmth of a small Sri Lankan family business.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div
              key={f.title}
              className="hover-lift group rounded-2xl border border-border bg-card p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-white shadow-soft">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

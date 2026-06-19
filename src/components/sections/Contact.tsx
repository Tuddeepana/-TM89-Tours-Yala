import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";
import { WhatsAppIcon } from "@/components/layout/WhatsAppIcon";

export function Contact() {
  const items = [
    { icon: Phone, label: "Call us", value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: WhatsAppIcon, label: "WhatsApp", value: siteConfig.phone, href: buildWhatsAppUrl(`Hello ${siteConfig.name}!`) },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: "Location", value: siteConfig.address },
    { icon: Clock, label: "Hours", value: siteConfig.businessHours },
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Reach us anytime.</h2>
            <p className="mt-4 text-muted-foreground">
              Our team replies on WhatsApp in under 2 minutes, 24 hours a day.
            </p>

            <ul className="mt-8 space-y-4">
              {items.map((it) => (
                <li key={it.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-white shrink-0">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</div>
                    {it.href ? (
                      <a href={it.href} className="text-base font-semibold text-ink hover:text-primary">{it.value}</a>
                    ) : (
                      <div className="text-base font-semibold text-ink">{it.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Map"
              src={siteConfig.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

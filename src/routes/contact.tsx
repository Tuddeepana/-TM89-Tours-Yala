import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/sections/PageHeader";
import { Contact as ContactSection } from "@/components/sections/Contact";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${siteConfig.name}` },
      { name: "description", content: `Reach ${siteConfig.name} 24/7 on WhatsApp, phone or email. Office in Tissamaharama, Yala, Sri Lanka.` },
      { property: "og:title", content: `Contact — ${siteConfig.name}` },
      { property: "og:description", content: "24/7 WhatsApp booking and customer support." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Contact" title="We reply on WhatsApp in under 2 minutes" subtitle="Day or night, 365 days a year." />
      <ContactSection />
    </SiteShell>
  );
}

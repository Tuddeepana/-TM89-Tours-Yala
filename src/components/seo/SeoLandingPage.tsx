import { SiteShell } from "@/components/layout/SiteShell";
import { Fleet } from "@/components/sections/Fleet";
import { Reviews } from "@/components/sections/Reviews";
import { BookingForm } from "@/components/booking/BookingForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";

export interface SeoLandingPageProps {
  title: string;
  description: string;
  h1: string;
  content: React.ReactNode;
  faqs: { q: string; a: string }[];
  image: string;
  imageAlt: string;
  internalLinks: { title: string; href: string }[];
}

export function SeoLandingPage({
  h1,
  content,
  faqs,
  image,
  imageAlt,
  internalLinks,
}: SeoLandingPageProps) {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-slate-900">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover opacity-60"
            loading="eager"
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl max-w-4xl">
            {h1}
          </h1>
        </div>
      </section>

      {/* Main Content & Booking Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 prose prose-lg max-w-none prose-headings:text-primary">
            {content}
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Book Your Transfer</h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <Fleet />

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <Reviews />

      {/* Internal Linking */}
      {internalLinks.length > 0 && (
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Popular Routes & Services</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {internalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href as any}
                  className="rounded-lg bg-background p-4 text-center text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground shadow-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}

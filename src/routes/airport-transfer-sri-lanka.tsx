import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Airport Transfer Sri Lanka | Reliable Taxi Service from Colombo BIA";
const pageDescription = "Book your reliable Airport Transfer in Sri Lanka. Fixed price taxi service from Colombo Bandaranaike International Airport (BIA) to anywhere in Sri Lanka.";
const h1 = "Reliable Airport Transfers in Sri Lanka";

const faqs = [
  { q: "How do I find my driver at Colombo Airport?", a: "Your driver will be waiting in the arrival hall holding a nameboard with your name for easy identification." },
  { q: "Are your airport transfer prices fixed?", a: "Yes, all our prices are fixed with no hidden charges or extra fees for delayed flights." },
  { q: "Can I book an airport taxi last minute?", a: "We recommend booking at least 24 hours in advance, but we also accept last-minute bookings subject to availability. Please contact us via WhatsApp." }
];

export const Route = createFileRoute("/airport-transfer-sri-lanka")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Airport Transfer Sri Lanka", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80"
      imageAlt="Airport Transfer Sri Lanka Colombo Airport Taxi"
      content={
        <>
          <p>Start your Sri Lankan holiday the right way with our premium <strong>airport transfer Sri Lanka</strong> service. After a long flight, the last thing you want to do is negotiate with local taxi drivers or figure out public transport. Our professional drivers ensure a smooth, comfortable, and safe journey from Bandaranaike International Airport (BIA) to your destination.</p>
          <h2>Why Choose Our Colombo Airport Taxi Service?</h2>
          <ul>
            <li><strong>Meet and Greet:</strong> Driver waits at the arrivals hall with a nameboard.</li>
            <li><strong>Flight Tracking:</strong> We track your flight, so if you are delayed, we wait at no extra cost.</li>
            <li><strong>Air-Conditioned Comfort:</strong> Travel in modern, comfortable cars or vans depending on your group size.</li>
            <li><strong>Experienced Drivers:</strong> Safe, English-speaking drivers who know the roads of Sri Lanka perfectly.</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Taxi Colombo to Yala", href: "/taxi-colombo-airport-to-yala" },
        { title: "Taxi Colombo to Mirissa", href: "/taxi-colombo-airport-to-mirissa" },
        { title: "Taxi Colombo to Ella", href: "/taxi-colombo-airport-to-ella" },
      ]}
    />
  ),
});

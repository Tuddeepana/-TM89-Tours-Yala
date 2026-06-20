import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Taxi from Colombo to Galle | Airport Transfer";
const pageDescription = "Book a quick and safe taxi from Colombo or the Airport to Galle. Take the expressway with our professional drivers. Fixed prices and 24/7 service.";
const h1 = "Taxi from Colombo to Galle";

const faqs = [
  { q: "How long does it take from Colombo Airport to Galle?", a: "Using the Southern Expressway, it takes just under 2.5 hours to reach Galle from BIA." },
  { q: "Can we drop off passengers at different hotels in Galle?", a: "Yes, multi-stop drop-offs can be arranged. Please inform us during booking." },
  { q: "Do your drivers speak English?", a: "Yes, all our drivers speak English and are highly experienced in driving foreign tourists." }
];

export const Route = createFileRoute("/taxi-colombo-to-galle")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Taxi Colombo to Galle", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80"
      imageAlt="Galle Fort Sri Lanka Taxi Transfer"
      content={
        <>
          <p>Traveling to the historic Galle Fort? Ensure a smooth start to your vacation by booking a <strong>taxi from Colombo to Galle</strong> with us. Whether you are arriving at the airport or staying in Colombo city, we offer prompt and comfortable rides down south.</p>
          <h2>Expressway Taxi to Galle</h2>
          <p>Thanks to the Southern Expressway, reaching Galle is faster than ever. What used to be a long 4-hour drive on the coastal road now takes just 2 to 2.5 hours. Our modern fleet of cars and passenger vans are perfectly maintained to offer a silent and smooth highway journey.</p>
          <h3>Our Promises</h3>
          <ul>
            <li>No hidden highway toll charges (everything is included).</li>
            <li>Free meet and greet at the airport.</li>
            <li>Clean, air-conditioned vehicles for a tropical climate.</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Taxi Colombo to Unawatuna", href: "/taxi-colombo-to-unawatuna" },
        { title: "Taxi Colombo to Mirissa", href: "/taxi-colombo-airport-to-mirissa" },
        { title: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      ]}
    />
  ),
});

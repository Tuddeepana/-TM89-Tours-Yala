import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Taxi from Colombo to Unawatuna | Airport Transfer";
const pageDescription = "Book a direct taxi from Colombo Airport to Unawatuna. Fast highway transfers, comfortable vehicles, and reliable service. WhatsApp to book your ride.";
const h1 = "Taxi from Colombo to Unawatuna";

const faqs = [
  { q: "How long is the transfer from Colombo to Unawatuna?", a: "Unawatuna is just past Galle, so the transfer from BIA takes approximately 2.5 hours via the expressway." },
  { q: "Do you provide child seats?", a: "Yes, we can provide child seats upon request. Please let us know the age of the child when booking." },
  { q: "Is the price fixed?", a: "Yes, the price you are quoted is the final price, including all tolls and parking." }
];

export const Route = createFileRoute("/taxi-colombo-to-unawatuna")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Taxi Colombo to Unawatuna", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80"
      imageAlt="Unawatuna Beach Sri Lanka Taxi"
      content={
        <>
          <p>Get to one of Sri Lanka's most popular beaches safely and quickly. Our <strong>taxi from Colombo to Unawatuna</strong> service offers a direct, private transfer straight from the airport or your Colombo hotel to the sandy shores of Unawatuna.</p>
          <h2>Direct Transfer to Unawatuna Beach</h2>
          <p>Unawatuna is renowned for its calm waters, snorkeling, and beachfront dining. After a long flight, arriving at your hotel quickly is a priority. Using the Southern Expressway, we get you to Unawatuna in about 2.5 hours. Skip the confusing train schedules and enjoy door-to-door service.</p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Door-to-door convenience with luggage assistance.</li>
            <li>Reliable and punctual drivers.</li>
            <li>Comfortable vehicles equipped with modern AC.</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Taxi Colombo to Galle", href: "/taxi-colombo-to-galle" },
        { title: "Taxi Colombo to Mirissa", href: "/taxi-colombo-airport-to-mirissa" },
        { title: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      ]}
    />
  ),
});

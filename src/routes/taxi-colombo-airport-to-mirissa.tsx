import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Taxi from Colombo Airport to Mirissa | Private Transfer";
const pageDescription = "Book your private taxi from Colombo Airport to Mirissa. Enjoy a smooth, fast journey down the Southern Expressway. Fixed rates and 24/7 WhatsApp booking.";
const h1 = "Taxi from Colombo Airport to Mirissa";

const faqs = [
  { q: "How long is the taxi ride from Colombo Airport to Mirissa?", a: "Using the Southern Expressway, the transfer takes about 2.5 to 3 hours depending on traffic near the airport and Mirissa town." },
  { q: "Do you have vans for surfboards?", a: "Yes, our KDH vans have plenty of space for luggage and surfboards. Just let us know when booking!" },
  { q: "Are the highway tolls included in the price?", a: "Yes, all our prices are fully inclusive of highway tolls and airport parking fees." }
];

export const Route = createFileRoute("/taxi-colombo-airport-to-mirissa")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Taxi Colombo Airport to Mirissa", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80"
      imageAlt="Mirissa Beach Sri Lanka Surf Taxi"
      content={
        <>
          <p>Head straight to the beautiful southern beaches with our premium <strong>taxi from Colombo Airport to Mirissa</strong>. Forget the stressful crowded buses; our private drivers will take you directly from the arrivals terminal to your beachside hotel.</p>
          <h2>Fast & Comfortable Transfers</h2>
          <p>Mirissa is famous for its incredible whale watching, surfing spots, and vibrant nightlife. By taking the Southern Expressway, you can reach Mirissa in just under 3 hours in absolute comfort. We provide modern sedans for couples and spacious vans for groups carrying surfboards and extra luggage.</p>
          <h3>Service Highlights</h3>
          <ul>
            <li>Door-to-door service directly to your hotel.</li>
            <li>Free meet and greet at BIA arrivals.</li>
            <li>24/7 customer support via WhatsApp.</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Taxi Colombo to Galle", href: "/taxi-colombo-to-galle" },
        { title: "Taxi Colombo to Unawatuna", href: "/taxi-colombo-to-unawatuna" },
        { title: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      ]}
    />
  ),
});

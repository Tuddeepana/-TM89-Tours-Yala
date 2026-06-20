import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Taxi from Colombo Airport to Arugam Bay | Direct Transfer";
const pageDescription = "Book your taxi from Colombo Airport to Arugam Bay. Long-distance transfers made comfortable. Spacious vans for surfboards. Fixed rates, safe drivers.";
const h1 = "Taxi from Colombo Airport to Arugam Bay";

const faqs = [
  { q: "How long is the journey to Arugam Bay from the airport?", a: "Arugam Bay is on the East Coast. The drive takes approximately 7 to 8 hours depending on the route and stops." },
  { q: "Do you provide vans that can carry multiple surfboards?", a: "Yes, we specialize in surf transfers. Our Toyota KDH vans are perfect for groups traveling with multiple surfboards." },
  { q: "Can we split the journey with an overnight stay?", a: "Yes, we can arrange multi-day tours or transfers with overnight stops in places like Ella or Yala on the way to Arugam Bay." }
];

export const Route = createFileRoute("/taxi-colombo-airport-to-arugam-bay")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Taxi Colombo Airport to Arugam Bay", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1526344966-89049886e28d?auto=format&fit=crop&q=80"
      imageAlt="Arugam Bay Surf Sri Lanka Taxi Transfer"
      content={
        <>
          <p>Heading to the surfing capital of Sri Lanka? Book your <strong>taxi from Colombo Airport to Arugam Bay</strong> with us for a safe, comfortable, and spacious ride perfect for surfers and beach lovers.</p>
          <h2>Long Distance Surf Transfers</h2>
          <p>Arugam Bay is located on the East Coast of Sri Lanka. The journey from Colombo is a long one, taking up to 8 hours. Don't compromise on comfort for such a long trip. Our vehicles have ample legroom, excellent AC, and plenty of space for all your luggage and surfboards.</p>
          <h3>Why Book Your Arugam Bay Transfer With Us?</h3>
          <ul>
            <li><strong>Surfboard Friendly:</strong> Large vans available for extensive gear.</li>
            <li><strong>Safety First:</strong> Expert long-distance drivers.</li>
            <li><strong>Rest Stops:</strong> Take as many breaks as you need for food and stretching.</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Taxi Colombo to Yala", href: "/taxi-colombo-airport-to-yala" },
        { title: "Private Driver Sri Lanka", href: "/private-driver-sri-lanka" },
        { title: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      ]}
    />
  ),
});

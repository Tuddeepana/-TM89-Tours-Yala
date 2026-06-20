import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Yala Safari Transfers & Jeep Hire | Direct Booking";
const pageDescription = "Book your Yala Safari transfer and 4x4 Jeep Hire. We provide complete transportation from your hotel directly into Yala National Park for leopards and elephants.";
const h1 = "Yala Safari Transfers & Jeep Hire";

const faqs = [
  { q: "Do you provide the safari jeep as well as the taxi transfer?", a: "Yes, we can arrange both! We provide comfortable taxi transfers to Yala, and we partner with the best 4x4 safari jeep drivers for your park tour." },
  { q: "What time should we start our Yala safari?", a: "For the best chance to see leopards, we highly recommend the morning safari starting at 5:30 AM or the afternoon safari starting at 2:30 PM." },
  { q: "Can you pick us up from Ella or Mirissa for the safari?", a: "Yes, we offer transfer services from Ella, Mirissa, Tangalle, and Colombo directly to Yala." }
];

export const Route = createFileRoute("/yala-safari-transfers")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Yala Safari Transfers", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1549473214-722e0326f50b?auto=format&fit=crop&q=80"
      imageAlt="Yala Safari Leopard Jeep Tour Sri Lanka"
      content={
        <>
          <p>Get ready for the wildlife adventure of a lifetime. Book your <strong>Yala Safari Transfers</strong> with us for a seamless experience from your hotel directly into the heart of Yala National Park.</p>
          <h2>Complete Safari Transportation</h2>
          <p>Organizing a safari can be complicated with tickets, jeeps, and taxi transfers. We simplify everything. We can pick you up from anywhere in Sri Lanka (including Ella, Mirissa, or Colombo), bring you to Tissamaharama/Yala, and arrange a high-quality 4x4 safari jeep with an expert wildlife tracker.</p>
          <h3>Safari Services Offered</h3>
          <ul>
            <li><strong>Morning Safari:</strong> Best for spotting the elusive Sri Lankan Leopard.</li>
            <li><strong>Afternoon Safari:</strong> Great for elephants, sloth bears, and bird watching.</li>
            <li><strong>Full Day Safari:</strong> For serious wildlife enthusiasts and photographers.</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Taxi Colombo to Yala", href: "/taxi-colombo-airport-to-yala" },
        { title: "Sri Lanka Tour Packages", href: "/sri-lanka-tour-packages" },
        { title: "Private Driver Sri Lanka", href: "/private-driver-sri-lanka" },
      ]}
    />
  ),
});

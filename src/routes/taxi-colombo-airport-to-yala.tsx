import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Taxi from Colombo Airport to Yala | Best Price Transfer";
const pageDescription = "Book a reliable taxi from Colombo Airport to Yala National Park. Comfortable AC cars & vans, professional drivers, and fixed prices. Direct WhatsApp booking.";
const h1 = "Taxi from Colombo Airport to Yala";

const faqs = [
  { q: "How long does it take to get from Colombo Airport to Yala?", a: "The journey via the Southern Expressway takes approximately 4.5 to 5 hours." },
  { q: "Can we stop for food on the way to Yala?", a: "Yes, our drivers are happy to make stops for meals, restrooms, or scenic views at no extra cost." },
  { q: "Do you offer safari vehicles in Yala as well?", a: "Yes, we can arrange both your airport transfer to Yala and your 4x4 safari jeep experience." }
];

export const Route = createFileRoute("/taxi-colombo-airport-to-yala")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Taxi Colombo Airport to Yala", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1616016629986-e7926b01b637?auto=format&fit=crop&q=80"
      imageAlt="Yala National Park Safari Leopard Taxi Sri Lanka"
      content={
        <>
          <p>Looking for a comfortable and direct <strong>taxi from Colombo Airport to Yala</strong>? We provide premium private transfers directly from Bandaranaike International Airport (BIA) to your hotel in Tissamaharama or Yala. </p>
          <h2>The Journey to Yala</h2>
          <p>The fastest and most comfortable way to reach Yala from the airport is via the Southern Expressway. The drive takes about 4.5 to 5 hours, offering beautiful scenic views along the way. Skip the hassle of multiple bus or train transfers and enjoy a direct ride in an air-conditioned vehicle.</p>
          <h3>Why book with us?</h3>
          <ul>
            <li>Fixed transparent pricing with no hidden highway toll fees.</li>
            <li>Experienced drivers who drive safely.</li>
            <li>Clean, modern cars (for couples/solo) and KDH vans (for families/groups).</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Yala Safari Transfers", href: "/yala-safari-transfers" },
        { title: "Private Driver Sri Lanka", href: "/private-driver-sri-lanka" },
        { title: "Taxi Colombo to Ella", href: "/taxi-colombo-airport-to-ella" },
      ]}
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Taxi from Colombo Airport to Sigiriya | Fixed Price";
const pageDescription = "Book a direct taxi from Colombo Airport to Sigiriya. Start your cultural triangle tour comfortably. Professional drivers, AC cars, and 24/7 booking.";
const h1 = "Taxi from Colombo Airport to Sigiriya";

const faqs = [
  { q: "How long does it take from Colombo Airport to Sigiriya?", a: "The drive from BIA to Sigiriya generally takes around 3.5 to 4 hours." },
  { q: "Can we visit the Pinnawala Elephant Orphanage on the way?", a: "Yes, we can customize your transfer to include a stop at Pinnawala for a small additional fee. Just let us know!" },
  { q: "Do you offer return trips or multi-day drivers?", a: "Yes, we offer both one-way transfers and multi-day private driver packages to explore the Cultural Triangle." }
];

export const Route = createFileRoute("/taxi-colombo-airport-to-sigiriya")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Taxi Colombo Airport to Sigiriya", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1588631168884-bb9b5c3ff018?auto=format&fit=crop&q=80"
      imageAlt="Sigiriya Lion Rock Sri Lanka Taxi Transfer"
      content={
        <>
          <p>Begin your exploration of Sri Lanka's Cultural Triangle immediately upon arrival. Book a comfortable <strong>taxi from Colombo Airport to Sigiriya</strong> and enjoy a hassle-free journey directly to the magnificent Lion Rock.</p>
          <h2>Comfortable Transfers to the Cultural Triangle</h2>
          <p>Sigiriya, a UNESCO World Heritage site, is a must-visit. The journey from BIA takes roughly 4 hours. By choosing a private taxi over public transport, you save significant time and travel in air-conditioned comfort, ensuring you're rested and ready to climb the rock.</p>
          <h3>Our Service Benefits</h3>
          <ul>
            <li>Fixed transparent rates without hidden fees.</li>
            <li>Free BIA airport meet and greet service.</li>
            <li>Clean and comfortable sedans and vans.</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Private Driver Sri Lanka", href: "/private-driver-sri-lanka" },
        { title: "Sri Lanka Tour Packages", href: "/sri-lanka-tour-packages" },
        { title: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      ]}
    />
  ),
});

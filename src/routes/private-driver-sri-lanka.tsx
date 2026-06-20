import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Private Driver Sri Lanka | Hire a Car with Driver";
const pageDescription = "Hire a professional private driver in Sri Lanka. Custom tour itineraries, safe English-speaking drivers, and modern AC vehicles. Explore Sri Lanka your way.";
const h1 = "Hire a Private Driver in Sri Lanka";

const faqs = [
  { q: "How does hiring a private driver work?", a: "You hire the driver and the vehicle for a set number of days. They stay with you throughout your tour, driving you between destinations and acting as a guide." },
  { q: "Do I need to pay for the driver's accommodation and food?", a: "Most of the hotels you book will provide free driver accommodation. If not, a small standard daily allowance is added to your package to cover their meals and stay." },
  { q: "Can we create our own itinerary?", a: "Absolutely! You have complete freedom to choose where you want to go. We can also suggest routes to optimize your travel time." }
];

export const Route = createFileRoute("/private-driver-sri-lanka")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Private Driver Sri Lanka", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1544490807-6a160868f0aa?auto=format&fit=crop&q=80"
      imageAlt="Private Driver Sri Lanka Kandy Tour"
      content={
        <>
          <p>Experience the ultimate freedom of traveling around the island by hiring a <strong>private driver in Sri Lanka</strong>. Discover hidden gems, stop whenever you want for photos, and enjoy the local knowledge of a professional chauffeur guide.</p>
          <h2>Explore Sri Lanka Your Way</h2>
          <p>Navigating Sri Lankan traffic and roads can be stressful. By hiring a car with a driver, you get a stress-free holiday. Our drivers are tourist board approved, English-speaking, and extremely knowledgeable about the island's culture, history, and wildlife.</p>
          <h3>Benefits of a Private Chauffeur</h3>
          <ul>
            <li><strong>Complete Flexibility:</strong> Change your plans on the go.</li>
            <li><strong>Local Insights:</strong> Find the best local restaurants and off-the-beaten-path sights.</li>
            <li><strong>Safety:</strong> Our drivers are experienced professionals trained for tourist transport.</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Sri Lanka Tour Packages", href: "/sri-lanka-tour-packages" },
        { title: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
        { title: "Yala Safari Transfers", href: "/yala-safari-transfers" },
      ]}
    />
  ),
});

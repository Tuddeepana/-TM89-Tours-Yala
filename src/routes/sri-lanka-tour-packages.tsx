import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Sri Lanka Tour Packages | Custom Tailor-Made Tours";
const pageDescription = "Explore our Sri Lanka Tour Packages. Custom itineraries, wildlife safaris, cultural triangles, and beach holidays. Get a free quote today.";
const h1 = "Custom Sri Lanka Tour Packages";

const faqs = [
  { q: "Are your tour packages all-inclusive?", a: "We offer both transport-only packages (you book your hotels) and fully inclusive packages (we handle hotels, tickets, and transport). You choose what suits you best." },
  { q: "How long are your typical tours?", a: "Our most popular tours range from 5 days to 14 days, but we can customize a tour for any duration." },
  { q: "Can we include a Yala Safari in our tour?", a: "Yes, almost all our southern and multi-day tours include a Yala National Park safari experience." }
];

export const Route = createFileRoute("/sri-lanka-tour-packages")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Sri Lanka Tour Packages", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1550977186-c4582f219a4e?auto=format&fit=crop&q=80"
      imageAlt="Sri Lanka Tour Packages Culture Safari"
      content={
        <>
          <p>Discover the magic of the Pearl of the Indian Ocean with our customizable <strong>Sri Lanka tour packages</strong>. Whether you are looking for a romantic honeymoon, a family adventure, or a wildlife photography expedition, we have the perfect itinerary for you.</p>
          <h2>Tailor-Made Itineraries</h2>
          <p>We don't believe in one-size-fits-all tours. You tell us what you love—beaches, history, wildlife, or tea mountains—and we design a tour specifically for you. From the ancient ruins of Polonnaruwa to the leopard-dense jungles of Yala, experience it all.</p>
          <h3>Popular Tour Themes</h3>
          <ul>
            <li><strong>The Cultural Triangle:</strong> Sigiriya, Dambulla, Polonnaruwa, and Anuradhapura.</li>
            <li><strong>Wildlife & Nature:</strong> Yala Safari, Udawalawe, and whale watching in Mirissa.</li>
            <li><strong>Hill Country Highlights:</strong> Kandy, Nuwara Eliya, and the famous Ella train ride.</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Private Driver Sri Lanka", href: "/private-driver-sri-lanka" },
        { title: "Yala Safari Transfers", href: "/yala-safari-transfers" },
        { title: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      ]}
    />
  ),
});

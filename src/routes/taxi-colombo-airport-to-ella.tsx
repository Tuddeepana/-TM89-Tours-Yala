import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/config/seo";

const pageTitle = "Taxi from Colombo Airport to Ella | Direct Transfer";
const pageDescription = "Book a direct taxi from Colombo Airport to Ella. Travel through the scenic hill country in comfort. Fixed prices, AC vehicles, and experienced drivers.";
const h1 = "Taxi from Colombo Airport to Ella";

const faqs = [
  { q: "How long is the drive from Colombo Airport to Ella?", a: "The drive takes approximately 5.5 to 6.5 hours depending on traffic and the route taken." },
  { q: "Can we stop for photos in the hill country?", a: "Absolutely! The drive up to Ella is beautiful. Our drivers are happy to stop at scenic viewpoints or waterfalls along the way." },
  { q: "Is it safe to drive to Ella at night?", a: "Yes, our drivers are highly experienced in navigating Sri Lankan roads at night, ensuring a safe journey to Ella." }
];

export const Route = createFileRoute("/taxi-colombo-airport-to-ella")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceSchema("Taxi Colombo Airport to Ella", pageDescription)) },
    ],
  }),
  component: () => (
    <SeoLandingPage
      title={pageTitle}
      description={pageDescription}
      h1={h1}
      image="https://images.unsplash.com/photo-1546875888-c70e28f3cb24?auto=format&fit=crop&q=80"
      imageAlt="Nine Arch Bridge Ella Sri Lanka Train Taxi"
      content={
        <>
          <p>Embark on a breathtaking journey to the hill country with our reliable <strong>taxi from Colombo Airport to Ella</strong>. Let us handle the long drive while you sit back and enjoy the changing landscapes, from the busy city to misty mountains and tea plantations.</p>
          <h2>Scenic Private Transfers to Ella</h2>
          <p>Ella is one of Sri Lanka's most beloved destinations, famous for the Nine Arch Bridge, Ella Rock, and Little Adam's Peak. The journey takes around 6 hours. With our private transfer, you get the flexibility to stop and admire the views, stretch your legs, and grab a cup of famous Ceylon tea on the way.</p>
          <h3>Why Travel With Us?</h3>
          <ul>
            <li>Spacious vehicles designed for long-distance comfort.</li>
            <li>Experienced drivers accustomed to mountain roads.</li>
            <li>No hidden costs or extra charges for luggage.</li>
          </ul>
        </>
      }
      faqs={faqs}
      internalLinks={[
        { title: "Taxi Colombo to Yala", href: "/taxi-colombo-airport-to-yala" },
        { title: "Private Driver Sri Lanka", href: "/private-driver-sri-lanka" },
        { title: "Sri Lanka Tour Packages", href: "/sri-lanka-tour-packages" },
      ]}
    />
  ),
});

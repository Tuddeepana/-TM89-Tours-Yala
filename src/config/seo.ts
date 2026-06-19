// Centralized SEO config. Update this file to retarget keywords.
import { siteConfig } from "./site";

export const seoDefaults = {
  titleTemplate: (page: string) => `${page} — ${siteConfig.name}`,
  defaultTitle: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "Sri Lanka taxi",
    "Sri Lanka airport transfer",
    "Yala safari taxi",
    "Bandaranaike Airport pickup",
    "Colombo airport transfer",
    "Sri Lanka tour package",
    "KDH van hire Sri Lanka",
    "Ella tour",
    "Sigiriya tour",
    "Mirissa whale watching transfer",
  ],
  ogImage: "/og-image.jpg",
  twitterHandle: "@tm89tours",
};

// JSON-LD: Local Business
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService", "TravelAgency"],
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressCountry: "LK",
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1247",
  },
};

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

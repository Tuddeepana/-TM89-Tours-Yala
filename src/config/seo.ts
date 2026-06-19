// Centralized SEO config. Update this file to retarget keywords.
import { siteConfig } from "./site";

export const seoDefaults = {
  titleTemplate: (page: string) => `${page} | ${siteConfig.name}`,
  defaultTitle: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  url: siteConfig.url,
  keywords: [
    "Sri Lanka Taxi Service",
    "Airport Transfer Sri Lanka",
    "Private Driver Sri Lanka",
    "Sri Lanka Airport Taxi",
    "Taxi Booking Sri Lanka",
    "Taxi from Colombo Airport",
    "Yala Taxi Service",
    "Sri Lanka Tour Transport",
    "Private Transfers Sri Lanka",
    "Car Hire with Driver Sri Lanka",
  ],
  ogImage: `${siteConfig.url}/logo.jpeg`,
  twitterHandle: "@tm89tours",
};

// JSON-LD: Local Business
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService", "TravelAgency"],
  name: siteConfig.name,
  image: `${siteConfig.url}/logo.jpeg`,
  url: siteConfig.url,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressCountry: "LK",
  },
  areaServed: [
    { "@type": "Country", name: "Sri Lanka" },
    { "@type": "City", name: "Yala" },
    { "@type": "City", name: "Ella" },
    { "@type": "City", name: "Mirissa" },
    { "@type": "City", name: "Sigiriya" },
    { "@type": "City", name: "Colombo" },
    { "@type": "City", name: "Galle" },
    { "@type": "City", name: "Tangalle" },
    { "@type": "City", name: "Arugam Bay" },
    { "@type": "City", name: "Kandy" },
    { "@type": "City", name: "Nuwara Eliya" }
  ],
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1247",
  },
};

export const breadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.item}`,
  })),
});

export const serviceSchema = (serviceName: string, serviceDescription: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
  },
  description: serviceDescription,
  areaServed: {
    "@type": "Country",
    name: "Sri Lanka"
  }
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

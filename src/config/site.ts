// Single source of truth for brand identity.
// Update this file to rebrand the entire site.

export const siteConfig = {
  name: "TM89 Tours Yala",
  shortName: "TM89 Tours",
  tagline: "Premium Taxi & Tour Service in Sri Lanka",
  description:
    "Safe, reliable and comfortable airport transfers, taxi service and custom tours across Sri Lanka. 24/7 booking via WhatsApp.",
  country: "Sri Lanka",
  language: "en",

  // Contact
  phone: "+94 77 123 4567",
  phoneHref: "tel:+94771234567",
  whatsapp: "+94771234567", // E.164 without +
  whatsappNumber: "94771234567",
  email: "hello@tm89toursyala.com",
  address: "Tissamaharama Road, Yala, Sri Lanka",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63429.5!2d81.27!3d6.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1700000000000",
  businessHours: "Open 24 / 7 · 365 days",

  // Brand colors (also defined as CSS tokens in styles.css)
  colors: {
    primary: "#0F766E",
    secondary: "#F59E0B",
    accent: "#FFFFFF",
  },

  // Social
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    youtube: "https://youtube.com/",
  },

  // Stats
  stats: [
    { label: "Years of experience", value: "12+" },
    { label: "Happy travellers", value: "8,400+" },
    { label: "Licensed drivers", value: "30+" },
    { label: "Five-star reviews", value: "1,200+" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

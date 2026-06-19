import { siteConfig, buildWhatsAppUrl } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(`Hello ${siteConfig.name}, I'd like to book a taxi.`)}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-elegant animate-pulse-ring hover:scale-105 transition"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

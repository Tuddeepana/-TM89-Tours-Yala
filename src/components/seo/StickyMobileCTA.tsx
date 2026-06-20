import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t bg-background p-2 shadow-lg md:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-l-md bg-secondary/10 px-4 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/20"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <a
        href={buildWhatsAppUrl("Hello! I would like to book a taxi/transfer in Sri Lanka.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-r-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo.jpeg" alt={siteConfig.name} className="h-10 w-10 rounded-xl object-cover" />
              <span className="font-display text-lg font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{siteConfig.description}</p>
            <div className="mt-5 flex gap-2">
              {[
                { href: siteConfig.social.facebook, icon: Facebook, label: "Facebook" },
                { href: siteConfig.social.instagram, icon: Instagram, label: "Instagram" },
                { href: siteConfig.social.youtube, icon: Youtube, label: "YouTube" },
                { href: `https://wa.me/${siteConfig.whatsappNumber}`, icon: WhatsAppIcon, label: "WhatsApp" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}
                   className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-primary transition">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white">About us</Link></li>
              <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/airport-transfers" className="hover:text-white">Airport transfers</Link></li>
              {/* <li><Link to="/tours" className="hover:text-white">Sri Lanka tours</Link></li>
              <li><Link to="/tours" className="hover:text-white">Custom tours</Link></li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-secondary" /><a href={siteConfig.phoneHref} className="hover:text-white">{siteConfig.phone}</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-secondary" /><a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a></li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-secondary" /><span>{siteConfig.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

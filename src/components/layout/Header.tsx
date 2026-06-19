import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/airport-transfers", label: "Airport Transfers" },
  { to: "/tours", label: "Tours" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "glass shadow-soft" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white font-bold shadow-soft">
            T
          </span>
          <span className="flex flex-col leading-tight">
            <span className={cn("font-display text-base font-bold", solid ? "text-ink" : "text-white")}>
              {siteConfig.shortName}
            </span>
            <span className={cn("text-[10px] uppercase tracking-widest", solid ? "text-muted-foreground" : "text-white/80")}>
              Yala · Sri Lanka
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                solid
                  ? "text-ink/80 hover:text-primary hover:bg-primary/5"
                  : "text-white/90 hover:text-white hover:bg-white/10",
              )}
              activeProps={{
                className: solid ? "text-primary bg-primary/10" : "text-white bg-white/15",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all",
              solid
                ? "border border-border text-ink hover:border-primary hover:text-primary"
                : "border border-white/30 text-white hover:bg-white/10",
            )}
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={buildWhatsAppUrl(`Hello ${siteConfig.name}, I'd like to book a taxi.`)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:opacity-90 transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg",
            solid ? "text-ink" : "text-white",
          )}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 bg-background">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-primary/5"
                activeProps={{ className: "text-primary bg-primary/10" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={siteConfig.phoneHref} className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={buildWhatsAppUrl(`Hello ${siteConfig.name}, I'd like to book a taxi.`)}
                target="_blank"
                rel="noopener"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

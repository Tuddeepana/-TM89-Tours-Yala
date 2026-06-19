import heroImg from "@/assets/hero.jpg";
import { BookingForm } from "@/components/booking/BookingForm";
import { ShieldCheck, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Safari jeep on a misty Yala road at sunrise"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:grid-cols-12 lg:pt-40">
        <div className="lg:col-span-7 text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3.5 py-1.5 text-xs font-medium">
            <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
            4.9/5 from 1,247 travellers
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Premium Taxi & Tour <br className="hidden sm:block" />
            Service in <span className="text-secondary">Sri Lanka</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Safe · Reliable · Comfortable · 24/7 Service. Airport transfers, custom multi-day tours and Yala safari pickups — booked in 60 seconds on WhatsApp.
          </p>

          <div className="mt-7 flex flex-wrap gap-5 text-sm">
            {[
              "Fixed transparent pricing",
              "Licensed English-speaking drivers",
              "Fully insured fleet",
            ].map((t) => (
              <div key={t} className="inline-flex items-center gap-2 text-white/90">
                <ShieldCheck className="h-4 w-4 text-secondary" /> {t}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

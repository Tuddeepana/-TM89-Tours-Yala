import { useState } from "react";
import customImg from "@/assets/custom-tour.jpg";
import { customTourMessage } from "@/lib/wa";
import { WhatsAppIcon } from "@/components/layout/WhatsAppIcon";

export function CustomTour() {
  const [form, setForm] = useState({ name: "", whatsapp: "", dates: "", places: "", notes: "" });

  const url = customTourMessage(form);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const input = "w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary backdrop-blur transition";

  return (
    <section className="relative overflow-hidden py-24">
      <img src={customImg} alt="Sri Lankan tea plantations at golden hour" loading="lazy" width={1920} height={1080}
           className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Tailor-made</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Create your own Sri Lanka tour
          </h2>
          <p className="mt-4 max-w-md text-white/85">
            Tell us where you want to go and how long you have. We'll come back within an hour with a quote, suggested route and the right vehicle for your group.
          </p>
          <ul className="mt-7 space-y-3 text-sm">
            {[
              "Free itinerary planning by a local",
              "One driver-guide for the whole trip",
              "Pay only after you approve the plan",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); window.open(url, "_blank"); }}
          className="rounded-3xl glass-dark p-6 sm:p-8 shadow-elegant"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input className={input} placeholder="Your name" value={form.name} onChange={set("name")} required />
            <input className={input} placeholder="WhatsApp number" value={form.whatsapp} onChange={set("whatsapp")} required />
            <input className={`${input} sm:col-span-2`} placeholder="Travel dates (e.g. 12–18 Jul 2026)" value={form.dates} onChange={set("dates")} required />
            <input className={`${input} sm:col-span-2`} placeholder="Places to visit (e.g. Sigiriya, Kandy, Ella, Yala, Mirissa)" value={form.places} onChange={set("places")} required />
            <textarea className={`${input} sm:col-span-2 min-h-[96px]`} placeholder="Special requirements (kids, dietary, accessibility...)" value={form.notes} onChange={set("notes")} />
          </div>
          <button type="submit" className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3.5 font-bold text-ink hover:opacity-90 shadow-soft transition">
            <WhatsAppIcon className="h-5 w-5" /> Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

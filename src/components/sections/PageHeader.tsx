import heroImg from "@/assets/hero.jpg";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white animate-fade-up">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-secondary">{eyebrow}</p>}
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}

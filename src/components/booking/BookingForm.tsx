import { useMemo, useState } from "react";
import { ArrowRight, Calendar, Clock, MapPin, Car } from "lucide-react";
import { vehicles, pickupLocations, locations, calculateRideFare, formatLKR, type VehicleType } from "@/config/pricing";
import { bookingMessage } from "@/lib/wa";
import { WhatsAppIcon } from "@/components/layout/WhatsAppIcon";

export function BookingForm({ variant = "hero" }: { variant?: "hero" | "page" }) {
  const today = new Date().toISOString().slice(0, 10);
  const [pickup, setPickup] = useState("Colombo Airport (BIA)");
  const [drop, setDrop] = useState("Colombo");
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("10:00");
  const [vehicle, setVehicle] = useState<VehicleType>("SEDAN");

  const price = useMemo(() => calculateRideFare(pickup, drop, vehicle)?.price ?? null, [pickup, drop, vehicle]);
  const whatsappUrl = bookingMessage({ pickup, drop, vehicle, date, time, price });

  const inputBase =
    "w-full rounded-xl border border-border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

  return (
    <div className={variant === "hero" ? "glass rounded-3xl p-5 sm:p-7 shadow-elegant" : "rounded-3xl border border-border bg-white p-5 sm:p-7 shadow-soft"}>
      <div className="mb-5 flex items-baseline justify-between">
        <h3 className="font-display text-xl font-bold text-ink">Instant booking</h3>
        <span className="text-xs font-medium text-primary">No card required</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field icon={<MapPin className="h-4 w-4" />} label="Pickup">
          <select className={inputBase} value={pickup} onChange={(e) => setPickup(e.target.value)}>
            {pickupLocations.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
        <Field icon={<MapPin className="h-4 w-4" />} label="Drop">
          <select className={inputBase} value={drop} onChange={(e) => setDrop(e.target.value)}>
            {locations.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
        <Field icon={<Calendar className="h-4 w-4" />} label="Date">
          <input type="date" className={inputBase} value={date} min={today} onChange={(e) => setDate(e.target.value)} />
        </Field>
        <Field icon={<Clock className="h-4 w-4" />} label="Time">
          <input type="time" className={inputBase} value={time} onChange={(e) => setTime(e.target.value)} />
        </Field>
        <Field icon={<Car className="h-4 w-4" />} label="Vehicle" className="sm:col-span-2">
          <select className={inputBase} value={vehicle} onChange={(e) => setVehicle(e.target.value as VehicleType)}>
            {vehicles.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5 rounded-2xl gradient-primary p-4 text-white flex items-center justify-between shadow-soft">
        <div>
          <div className="text-xs uppercase tracking-wider text-white/80">{pickup} → {drop}</div>
          <div className="font-display text-2xl font-bold">
            {price ? formatLKR(price) : "Get quote on WhatsApp"}
          </div>
          <div className="text-xs text-white/80 mt-0.5">All-inclusive · fuel & driver</div>
        </div>
        <div className="hidden sm:block text-right">
          <div className="text-xs text-white/80">Vehicle</div>
          <div className="font-semibold">{vehicle}</div>
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3.5 font-semibold text-white shadow-soft hover:opacity-90 transition"
        >
          <WhatsAppIcon className="h-5 w-5" /> Book via WhatsApp
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink/10 bg-white px-5 py-3.5 font-semibold text-ink hover:border-primary hover:text-primary transition"
        >
          Get a quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function Field({
  icon, label, children, className = "",
}: { icon: React.ReactNode; label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink/70">
        <span className="text-primary">{icon}</span> {label}
      </span>
      {children}
    </label>
  );
}

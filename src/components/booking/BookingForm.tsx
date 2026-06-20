import { useMemo, useState } from "react";
import { ArrowRight, Calendar, Clock, MapPin, Car, User, MessageSquare, CalendarRange } from "lucide-react";
import { vehicles, pickupLocations, locations, calculateRideFare, formatLKR, type VehicleType, tourPricing } from "@/config/pricing";
import { bookingMessage, customRideMessage, tourMessage } from "@/lib/wa";
import { WhatsAppIcon } from "@/components/layout/WhatsAppIcon";

type TabType = "ride" | "custom" | "tour";

const INPUT_BASE =
  "w-full rounded-xl border border-border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

export function BookingForm({ variant = "hero" }: { variant?: "hero" | "page" }) {
  const [activeTab, setActiveTab] = useState<TabType>("ride");

  return (
    <div className={variant === "hero" ? "glass rounded-3xl p-5 sm:p-7 shadow-elegant" : "rounded-3xl border border-border bg-white p-5 sm:p-7 shadow-soft"}>
      <div className="mb-5 flex items-baseline justify-between">
        <h3 className="font-display text-xl font-bold text-ink">Instant booking</h3>
        <span className="text-xs font-medium text-primary">No card required</span>
      </div>

      <div className="mb-5 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setActiveTab("ride")}
          className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
            activeTab === "ride" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Book Ride
        </button>
        <button
          onClick={() => setActiveTab("custom")}
          className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
            activeTab === "custom" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Custom Request
        </button>
        <button
          onClick={() => setActiveTab("tour")}
          className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
            activeTab === "tour" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Book Tour
        </button>
      </div>

      {activeTab === "ride" && <RideForm />}
      {activeTab === "custom" && <CustomRideForm />}
      {activeTab === "tour" && <TourForm />}
    </div>
  );
}

function RideForm() {
  const today = new Date().toISOString().slice(0, 10);
  const [pickup, setPickup] = useState("Colombo Airport (BIA)");
  const [drop, setDrop] = useState("Colombo");
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("10:00");
  const [vehicle, setVehicle] = useState<VehicleType>("SEDAN");

  const price = useMemo(() => calculateRideFare(pickup, drop, vehicle)?.price ?? null, [pickup, drop, vehicle]);
  const whatsappUrl = bookingMessage({ pickup, drop, vehicle, date, time, price });

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field icon={<MapPin className="h-4 w-4" />} label="Pickup">
          <select className={INPUT_BASE} value={pickup} onChange={(e) => setPickup(e.target.value)}>
            {pickupLocations.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
        <Field icon={<MapPin className="h-4 w-4" />} label="Drop">
          <select className={INPUT_BASE} value={drop} onChange={(e) => setDrop(e.target.value)}>
            {locations.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
        <Field icon={<Calendar className="h-4 w-4" />} label="Date">
          <input type="date" className={INPUT_BASE} value={date} min={today} onChange={(e) => setDate(e.target.value)} />
        </Field>
        <Field icon={<Clock className="h-4 w-4" />} label="Time">
          <input type="time" className={INPUT_BASE} value={time} onChange={(e) => setTime(e.target.value)} />
        </Field>
        <Field icon={<Car className="h-4 w-4" />} label="Vehicle" className="sm:col-span-2">
          <select className={INPUT_BASE} value={vehicle} onChange={(e) => setVehicle(e.target.value as VehicleType)}>
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
            {price ? formatLKR(price) : "Get quote"}
          </div>
          <div className="text-xs text-white/80 mt-0.5">All-inclusive · fuel & driver</div>
        </div>
        <div className="hidden sm:block text-right">
          <div className="text-xs text-white/80">Vehicle</div>
          <div className="font-semibold">{vehicle}</div>
        </div>
      </div>

      <div className="mt-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3.5 font-semibold text-white shadow-soft hover:opacity-90 transition"
        >
          <WhatsAppIcon className="h-5 w-5" /> Book via WhatsApp
        </a>
      </div>
    </>
  );
}

function CustomRideForm() {
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicle, setVehicle] = useState<VehicleType>("SEDAN");
  const [message, setMessage] = useState("");

  const whatsappUrl = customRideMessage({ name, pickup, destination, vehicle, message });

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field icon={<User className="h-4 w-4" />} label="Name" className="sm:col-span-2">
          <input type="text" placeholder="Your Name" className={INPUT_BASE} value={name} onChange={(e) => setName(e.target.value)} />
        </Field>
        <Field icon={<MapPin className="h-4 w-4" />} label="Pick Location">
          <textarea rows={2} placeholder="Pickup Location" className={`${INPUT_BASE} resize-none`} value={pickup} onChange={(e) => setPickup(e.target.value)} />
        </Field>
        <Field icon={<MapPin className="h-4 w-4" />} label="Destination">
          <textarea rows={2} placeholder="Destination" className={`${INPUT_BASE} resize-none`} value={destination} onChange={(e) => setDestination(e.target.value)} />
        </Field>
        <Field icon={<Car className="h-4 w-4" />} label="Vehicle" className="sm:col-span-2">
          <select className={INPUT_BASE} value={vehicle} onChange={(e) => setVehicle(e.target.value as VehicleType)}>
            {vehicles.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </Field>
        <Field icon={<MessageSquare className="h-4 w-4" />} label="Message" className="sm:col-span-2">
          <textarea rows={3} placeholder="Any special requests?" className={`${INPUT_BASE} resize-none`} value={message} onChange={(e) => setMessage(e.target.value)} />
        </Field>
      </div>

      <div className="mt-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3.5 font-semibold text-white shadow-soft hover:opacity-90 transition"
        >
          <WhatsAppIcon className="h-5 w-5" /> Send via WhatsApp
        </a>
      </div>
    </>
  );
}

function TourForm() {
  const today = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [vehicle, setVehicle] = useState<VehicleType>("SEDAN");

  const tourVehicles = Object.keys(tourPricing) as VehicleType[];

  const days = useMemo(() => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const diff = end - start;
    return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1);
  }, [startDate, endDate]);

  const price = tourPricing[vehicle] ? tourPricing[vehicle] * days : null;

  const whatsappUrl = tourMessage({ startDate, endDate, vehicle, price });

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field icon={<Calendar className="h-4 w-4" />} label="Start Date">
          <input type="date" className={INPUT_BASE} value={startDate} min={today} onChange={(e) => setStartDate(e.target.value)} />
        </Field>
        <Field icon={<CalendarRange className="h-4 w-4" />} label="End Date">
          <input type="date" className={INPUT_BASE} value={endDate} min={startDate} onChange={(e) => setEndDate(e.target.value)} />
        </Field>
        <Field icon={<Car className="h-4 w-4" />} label="Vehicle" className="sm:col-span-2">
          <select className={INPUT_BASE} value={vehicle} onChange={(e) => setVehicle(e.target.value as VehicleType)}>
            {tourVehicles.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </Field>
      </div>
      
      <div className="mt-5 rounded-2xl gradient-primary p-4 text-white flex items-center justify-between shadow-soft">
        <div>
          <div className="text-xs uppercase tracking-wider text-white/80">{days} Day{days > 1 ? 's' : ''} Tour</div>
          <div className="font-display text-2xl font-bold">
            {price ? formatLKR(price) : "Get quote"}
          </div>
          <div className="text-xs text-white/80 mt-0.5">Vehicle: {vehicle}</div>
        </div>
      </div>

      <div className="mt-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3.5 font-semibold text-white shadow-soft hover:opacity-90 transition"
        >
          <WhatsAppIcon className="h-5 w-5" /> Book via WhatsApp
        </a>
      </div>
    </>
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

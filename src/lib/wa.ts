import { siteConfig, buildWhatsAppUrl } from "@/config/site";

function formatTime12hr(timeString: string) {
  if (!timeString) return timeString;
  const parts = timeString.split(":");
  if (parts.length !== 2) return timeString;
  let hours = parseInt(parts[0], 10);
  const minutes = parts[1];
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strHours = hours < 10 ? "0" + hours : hours;
  return `${strHours}:${minutes} ${ampm}`;
}

export function bookingMessage(opts: {
  pickup: string;
  drop: string;
  vehicle: string;
  date: string;
  time: string;
  price?: number | null;
}) {
  const lines = [
    `Hello ${siteConfig.name},`,
    ``,
    `I'd like to book a transfer:`,
    `📍 Pickup: ${opts.pickup}`,
    `🏁 Drop: ${opts.drop}`,
    `🚘 Vehicle: ${opts.vehicle}`,
    `📅 Date: ${opts.date}`,
    `⏰ Time: ${formatTime12hr(opts.time)}`,
  ];
  if (opts.price) lines.push(`💰 Quoted price: Rs. ${opts.price.toLocaleString("en-LK")}`);
  lines.push(``, `Please confirm availability. Thank you!`);
  return buildWhatsAppUrl(lines.join("\n"));
}

export function customTourMessage(opts: {
  name: string;
  whatsapp: string;
  dates: string;
  places: string;
  notes: string;
}) {
  const msg = [
    `Hello ${siteConfig.name},`,
    ``,
    `I'd like to plan a custom Sri Lanka tour:`,
    `• Name: ${opts.name}`,
    `• WhatsApp: ${opts.whatsapp}`,
    `• Travel dates: ${opts.dates}`,
    `• Places to visit: ${opts.places}`,
    `• Special requirements: ${opts.notes || "—"}`,
    ``,
    `Please send me a proposal. Thank you!`,
  ].join("\n");
  return buildWhatsAppUrl(msg);
}

import { siteConfig, buildWhatsAppUrl } from "@/config/site";

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
    `• Pickup: ${opts.pickup}`,
    `• Drop: ${opts.drop}`,
    `• Vehicle: ${opts.vehicle}`,
    `• Date: ${opts.date}`,
    `• Time: ${opts.time}`,
  ];
  if (opts.price) lines.push(`• Quoted price: Rs. ${opts.price.toLocaleString("en-LK")}`);
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

import { n as siteConfig, t as buildWhatsAppUrl } from "./site-CLHEYpJU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wa-I5iDDXSM.js
function formatTime12hr(timeString) {
	if (!timeString) return timeString;
	const parts = timeString.split(":");
	if (parts.length !== 2) return timeString;
	let hours = parseInt(parts[0], 10);
	const minutes = parts[1];
	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12;
	hours = hours ? hours : 12;
	return `${hours < 10 ? "0" + hours : hours}:${minutes} ${ampm}`;
}
function bookingMessage(opts) {
	return buildWhatsAppUrl([
		`Hello ${siteConfig.name},`,
		``,
		`I'd like to book a transfer:`,
		`📍 Pickup: ${opts.pickup}`,
		`🏁 Drop: ${opts.drop}`,
		`🚘 Vehicle: ${opts.vehicle}`,
		`📅 Date: ${opts.date}`,
		`⏰ Time: ${formatTime12hr(opts.time)}`,
		``,
		`Please confirm availability. Thank you!`
	].join("\n"));
}
function customTourMessage(opts) {
	return buildWhatsAppUrl([
		`Hello ${siteConfig.name},`,
		``,
		`I'd like to plan a custom Sri Lanka tour:`,
		`• Name: ${opts.name}`,
		`• WhatsApp: ${opts.whatsapp}`,
		`• Travel dates: ${opts.dates}`,
		`• Places to visit: ${opts.places}`,
		`• Special requirements: ${opts.notes || "—"}`,
		``,
		`Please send me a proposal. Thank you!`
	].join("\n"));
}
function customRideMessage(opts) {
	return buildWhatsAppUrl([
		`Hello ${siteConfig.name},`,
		``,
		`I'd like to make a custom ride request:`,
		`👤 Name: ${opts.name}`,
		`📍 Pickup: ${opts.pickup}`,
		`🏁 Destination: ${opts.destination}`,
		`🚘 Vehicle: ${opts.vehicle}`,
		`💬 Message: ${opts.message || "—"}`,
		``,
		`Please confirm. Thank you!`
	].join("\n"));
}
function tourMessage(opts) {
	const lines = [
		`Hello ${siteConfig.name},`,
		``,
		`I'd like to book a tour:`,
		`📅 Start Date: ${opts.startDate}`,
		`📅 End Date: ${opts.endDate}`,
		`🚘 Vehicle: ${opts.vehicle}`
	];
	if (opts.price) lines.push(`💰 Quoted price: Rs. ${opts.price.toLocaleString("en-LK")}`);
	lines.push(``, `Please confirm availability. Thank you!`);
	return buildWhatsAppUrl(lines.join("\n"));
}
//#endregion
export { tourMessage as i, customRideMessage as n, customTourMessage as r, bookingMessage as t };

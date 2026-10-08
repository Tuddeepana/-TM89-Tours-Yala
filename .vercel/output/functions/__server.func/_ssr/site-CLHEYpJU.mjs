//#region node_modules/.nitro/vite/services/ssr/assets/site-CLHEYpJU.js
var siteConfig = {
	name: "TM89 Tours Yala",
	shortName: "TM89 Tours",
	tagline: "Sri Lanka Taxi Service & Airport Transfers",
	description: "Book reliable airport transfers, private taxis, and Sri Lanka tours with TM89 Tours Yala. Fixed prices, professional drivers, 24/7 support, and instant WhatsApp booking.",
	url: "https://tm89tours.com",
	country: "Sri Lanka",
	language: "en",
	phone: "+94 78 420 0377",
	phoneHref: "tel:+94784200377",
	whatsapp: "+94784200377",
	whatsappNumber: "94784200377",
	email: "Tharakamihiranga99@gmail.com",
	address: "Tissamaharama Road, Yala, Sri Lanka",
	mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63429.5!2d81.27!3d6.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1700000000000",
	businessHours: "Open 24 / 7 · 365 days",
	colors: {
		primary: "#0F766E",
		secondary: "#F59E0B",
		accent: "#FFFFFF"
	},
	social: {
		facebook: "https://facebook.com/",
		instagram: "https://instagram.com/",
		tiktok: "https://tiktok.com/",
		youtube: "https://youtube.com/"
	},
	stats: [
		{
			label: "Years of experience",
			value: "12+"
		},
		{
			label: "Happy travellers",
			value: "8,400+"
		},
		{
			label: "Licensed drivers",
			value: "30+"
		},
		{
			label: "Five-star reviews",
			value: "1,200+"
		}
	]
};
function buildWhatsAppUrl(message) {
	return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
//#endregion
export { siteConfig as n, buildWhatsAppUrl as t };

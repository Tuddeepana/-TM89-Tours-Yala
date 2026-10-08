import { n as siteConfig, t as buildWhatsAppUrl } from "./site-CLHEYpJU.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Mail, f as Phone, g as MapPin, w as Clock } from "../_libs/lucide-react.mjs";
import { n as WhatsAppIcon } from "./SiteShell-ByHjhE1r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Contact-DnomF2Up.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const items = [
		{
			icon: Phone,
			label: "Call us",
			value: siteConfig.phone,
			href: siteConfig.phoneHref
		},
		{
			icon: WhatsAppIcon,
			label: "WhatsApp",
			value: siteConfig.phone,
			href: buildWhatsAppUrl(`Hello ${siteConfig.name}!`)
		},
		{
			icon: Mail,
			label: "Email",
			value: siteConfig.email,
			href: `mailto:${siteConfig.email}`
		},
		{
			icon: MapPin,
			label: "Location",
			value: siteConfig.address
		},
		{
			icon: Clock,
			label: "Hours",
			value: siteConfig.businessHours
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28 bg-muted/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-widest text-primary",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold text-ink sm:text-4xl",
							children: "Reach us anytime."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Our team replies on WhatsApp in under 2 minutes, 24 hours a day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-4",
							children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-11 w-11 place-items-center rounded-xl gradient-primary text-white shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: it.label
								}), it.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: it.href,
									className: "text-base font-semibold text-ink hover:text-primary",
									children: it.value
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-base font-semibold text-ink",
									children: it.value
								})] })]
							}, it.label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-3 overflow-hidden rounded-3xl border border-border shadow-elegant",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map",
						src: siteConfig.mapEmbed,
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						className: "h-[420px] w-full lg:h-full"
					})
				})]
			})
		})
	});
}
//#endregion
export { Contact as t };

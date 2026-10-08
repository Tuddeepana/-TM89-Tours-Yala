import { t as buildWhatsAppUrl } from "./site-CLHEYpJU.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as SiteShell } from "./SiteShell-ByHjhE1r.mjs";
import { t as Fleet } from "./Fleet-Cl7p0zuJ.mjs";
import { t as PageHeader } from "./PageHeader-_YX1Qymr.mjs";
import { n as Destinations, t as CustomTour } from "./CustomTour-tvNoviAq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tours-Bo7hOa-i.js
var import_jsx_runtime = require_jsx_runtime();
var packages = [
	{
		title: "Cultural Triangle · 3 days",
		places: "Sigiriya · Dambulla · Polonnaruwa · Kandy",
		price: "from Rs. 78,000"
	},
	{
		title: "Hill Country · 4 days",
		places: "Kandy · Nuwara Eliya · Ella · Nine Arches Bridge",
		price: "from Rs. 96,000"
	},
	{
		title: "Wildlife & Beach · 5 days",
		places: "Yala safari · Tissamaharama · Mirissa · Galle",
		price: "from Rs. 120,000"
	},
	{
		title: "Grand Tour · 9 days",
		places: "Negombo → Sigiriya → Kandy → Ella → Yala → Mirissa → Galle",
		price: "from Rs. 215,000"
	}
];
function Tours() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Tours",
			title: "Private Sri Lanka tours, your own driver-guide",
			subtitle: "Hand-built itineraries with a single English-speaking driver from arrival to departure. Pick a package or design your own."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: packages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-wider text-secondary",
								children: p.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-lg font-bold text-ink",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.places
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: buildWhatsAppUrl(`Hi, I'm interested in the "${p.title}" tour.`),
								target: "_blank",
								rel: "noopener",
								className: "mt-5 inline-flex w-full items-center justify-center rounded-xl gradient-primary px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition",
								children: "Enquire"
							})
						]
					}, p.title))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Destinations, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTour, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fleet, {})
	] });
}
//#endregion
export { Tours as component };

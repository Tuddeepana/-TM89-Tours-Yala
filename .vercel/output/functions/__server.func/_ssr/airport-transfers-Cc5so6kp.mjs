import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as SiteShell } from "./SiteShell-ByHjhE1r.mjs";
import { i as vehicles, n as formatLKR, r as ridePricing, t as BookingForm } from "./BookingForm-DnAetXB_.mjs";
import { t as PageHeader } from "./PageHeader-_YX1Qymr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/airport-transfers-Cc5so6kp.js
var import_jsx_runtime = require_jsx_runtime();
function AirportTransfers() {
	const airportPricing = ridePricing["Colombo Airport (BIA)"] || {};
	const routes = Object.keys(airportPricing);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Airport transfers",
		title: "Fixed-price pickups from Bandaranaike Airport",
		subtitle: "Meet-and-greet at arrivals, named name card, free 60-minute wait. Quote on WhatsApp in under 2 minutes."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold text-ink sm:text-3xl",
						children: "Popular routes from CMB"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:block mt-6 overflow-auto max-h-[500px] rounded-2xl border border-border bg-card shadow-soft relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "sticky top-0 z-20 bg-muted text-ink/70 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "sticky left-0 z-30 bg-muted px-4 py-3 text-left font-semibold border-r border-border",
									children: "Destination"
								}), vehicles.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-right font-semibold",
									children: v
								}, v))] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: routes.map((dest) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "group border-t border-border hover:bg-muted/30 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "sticky left-0 z-10 bg-card px-4 py-3 font-medium text-ink border-r border-border group-hover:bg-muted/30 transition-colors",
									children: dest
								}), vehicles.map((v) => {
									const price = airportPricing[dest]?.[v];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-right text-ink/85",
										children: price ? formatLKR(price) : "—"
									}, v);
								})]
							}, dest)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:hidden mt-6 flex flex-col gap-4 overflow-y-auto max-h-[500px] pr-1 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent",
						children: routes.map((dest) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-2xl border border-border p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-lg text-ink mb-4",
								children: dest
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3 text-sm",
								children: vehicles.map((v) => {
									const price = airportPricing[dest]?.[v];
									if (!price) return null;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border/40 pb-2 last:border-0 last:pb-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-ink/70 font-medium",
											children: v
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-ink",
											children: formatLKR(price)
										})]
									}, v);
								})
							})]
						}, dest))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "All prices in LKR. Includes fuel, driver, expressway tolls and parking. Night surcharge may apply between 11pm–5am."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, { variant: "page" })
			})]
		})
	})] });
}
//#endregion
export { AirportTransfers as component };

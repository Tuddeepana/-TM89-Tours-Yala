import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Briefcase, c as Snowflake, i as Users } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Fleet-Cl7p0zuJ.js
var import_jsx_runtime = require_jsx_runtime();
var vehicle_kdh_flat_default = "/assets/vehicle-kdh-flat-DM_LOn1T.jpg";
var vehicle_kdh_high_default = "/assets/vehicle-kdh-high-BjPNWNoy.jpg";
var fleetVehicles = [
	{
		type: "MINI CAR",
		passengers: 3,
		luggage: 2,
		features: [
			"Air conditioning",
			"Fuel efficient",
			"City rides"
		]
	},
	{
		type: "SEDAN",
		passengers: 4,
		luggage: 3,
		features: [
			"Air conditioning",
			"Leather interior",
			"Long distance"
		]
	},
	{
		type: "MINI VAN",
		passengers: 6,
		luggage: 5,
		features: [
			"Air conditioning",
			"Spacious",
			"Family travel"
		]
	},
	{
		type: "KDH FLAT ROOF",
		passengers: 9,
		luggage: 8,
		features: [
			"Air conditioning",
			"Reclining seats",
			"Group travel"
		]
	},
	{
		type: "KDH HIGH ROOF",
		passengers: 12,
		luggage: 12,
		features: [
			"Air conditioning",
			"Stand-up cabin",
			"Premium tours"
		]
	}
];
var images = {
	"MINI CAR": "/mini.jpeg",
	"SEDAN": "/sedan.jpeg",
	"MINI VAN": vehicle_kdh_flat_default,
	"KDH FLAT ROOF": vehicle_kdh_flat_default,
	"KDH HIGH ROOF": vehicle_kdh_high_default
};
function Fleet() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-primary",
						children: "Our fleet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl",
						children: "Right-sized vehicles for every group."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "From solo travellers to extended families. Every vehicle is under 5 years old, A/C, and serviced monthly."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
				children: fleetVehicles.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hover-lift rounded-3xl border border-border bg-card overflow-hidden shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images[v.type],
							alt: v.type,
							loading: "lazy",
							width: 1024,
							height: 768,
							className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-ink",
								children: v.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5 text-primary" }),
											" ",
											v.passengers,
											" pax"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3.5 w-3.5 text-primary" }),
											" ",
											v.luggage,
											" bags"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snowflake, { className: "h-3.5 w-3.5 text-primary" }), " A/C"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-1 text-sm text-ink/80",
								children: v.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-secondary" }),
										" ",
										f
									]
								}, f))
							})
						]
					})]
				}, v.type))
			})]
		})
	});
}
//#endregion
export { Fleet as t };

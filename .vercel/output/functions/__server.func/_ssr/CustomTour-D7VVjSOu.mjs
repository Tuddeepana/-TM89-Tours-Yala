import { r as __toESM } from "../_runtime.mjs";
import { t as buildWhatsAppUrl } from "./site-CLHEYpJU.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { M as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as WhatsAppIcon } from "./SiteShell-ByHjhE1r.mjs";
import { r as customTourMessage } from "./wa-I5iDDXSM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CustomTour-D7VVjSOu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var destinations = [
	{
		name: "Yala National Park",
		img: "/assets/dest-yala-wsmKQWS1.jpg",
		desc: "Track leopards at dawn in Asia's densest big-cat density.",
		tag: "Wildlife"
	},
	{
		name: "Mirissa",
		img: "/assets/dest-mirissa-O0zXhWy8.jpg",
		desc: "Blue whales offshore, palm-fringed crescent beach onshore.",
		tag: "Coast"
	},
	{
		name: "Ella",
		img: "/assets/dest-ella-BwpzWMgc.jpg",
		desc: "Nine Arches Bridge, misty tea country and the iconic blue train.",
		tag: "Hill country"
	},
	{
		name: "Sigiriya",
		img: "/assets/dest-sigiriya-CK2aRAVr.jpg",
		desc: "1,500-year-old rock fortress rising 200m from the jungle.",
		tag: "Heritage"
	}
];
function Destinations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28 bg-muted/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-primary",
						children: "Popular destinations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl",
						children: "Where Sri Lanka travellers ask us to take them."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: buildWhatsAppUrl("Hi, I'd like to plan a multi-destination Sri Lanka tour."),
					target: "_blank",
					rel: "noopener",
					className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow",
					children: ["Plan a tour ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: destinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "hover-lift group relative overflow-hidden rounded-3xl bg-card shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[3/4] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: d.img,
								alt: d.name,
								loading: "lazy",
								width: 1024,
								height: 1280,
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-5 text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded-full bg-secondary/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink",
									children: d.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl font-bold",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-white/85",
									children: d.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: buildWhatsAppUrl(`Hi, I'd like to visit ${d.name}.`),
									target: "_blank",
									rel: "noopener",
									className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary",
									children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								})
							]
						})
					]
				}, d.name))
			})]
		})
	});
}
var custom_tour_default = "/assets/custom-tour-EuH76Oh-.jpg";
function CustomTour() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		whatsapp: "",
		dates: "",
		places: "",
		notes: ""
	});
	const url = customTourMessage(form);
	const set = (k) => (e) => setForm({
		...form,
		[k]: e.target.value
	});
	const input = "w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary backdrop-blur transition";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: custom_tour_default,
				alt: "Sri Lankan tea plantations at golden hour",
				loading: "lazy",
				width: 1920,
				height: 1080,
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-widest text-secondary",
							children: "Tailor-made"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl",
							children: "Create your own Sri Lanka tour"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-white/85",
							children: "Tell us where you want to go and how long you have. We'll come back within an hour with a quote, suggested route and the right vehicle for your group."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 space-y-3 text-sm",
							children: [
								"Free itinerary planning by a local",
								"One driver-guide for the whole trip",
								"Pay only after you approve the plan"
							].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-secondary" }),
									" ",
									p
								]
							}, p))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						window.open(url, "_blank");
					},
					className: "rounded-3xl glass-dark p-6 sm:p-8 shadow-elegant",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: input,
								placeholder: "Your name",
								value: form.name,
								onChange: set("name"),
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: input,
								placeholder: "WhatsApp number",
								value: form.whatsapp,
								onChange: set("whatsapp"),
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: `${input} sm:col-span-2`,
								placeholder: "Travel dates (e.g. 12–18 Jul 2026)",
								value: form.dates,
								onChange: set("dates"),
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: `${input} sm:col-span-2`,
								placeholder: "Places to visit (e.g. Sigiriya, Kandy, Ella, Yala, Mirissa)",
								value: form.places,
								onChange: set("places"),
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: `${input} sm:col-span-2 min-h-[96px]`,
								placeholder: "Special requirements (kids, dietary, accessibility...)",
								value: form.notes,
								onChange: set("notes")
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3.5 font-bold text-ink hover:opacity-90 shadow-soft transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-5 w-5" }), " Send via WhatsApp"]
					})]
				})]
			})
		]
	});
}
//#endregion
export { Destinations as n, CustomTour as t };

import { n as siteConfig } from "./site-CLHEYpJU.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as PlaneLanding, j as BadgeCheck, l as Shield, o as ThumbsUp, r as Wallet, w as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Features-BrYxMMUo.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-primary",
						children: "About us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl",
						children: "A family-run taxi company on a mission to make Sri Lanka effortless."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-muted-foreground leading-relaxed",
						children: [
							"Founded in Tissamaharama on the doorstep of Yala National Park, ",
							siteConfig.name,
							" has been moving international travellers across the island for over a decade. Every driver on the team is licensed, English-speaking, and personally trained by our founder."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground leading-relaxed",
						children: "We don't run on apps or meters. We run on word-of-mouth and 1,200+ five-star reviews — and we'd love to add yours."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: siteConfig.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-4xl font-bold gradient-primary bg-clip-text text-transparent",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				})]
			})
		})
	});
}
var items = [
	{
		icon: BadgeCheck,
		title: "Professional drivers",
		desc: "Licensed, English-speaking, deeply local. Average 8+ years on Sri Lankan roads."
	},
	{
		icon: Wallet,
		title: "Fixed transparent pricing",
		desc: "Quote on WhatsApp, pay the same in the car. No meters, no surge, no surprises."
	},
	{
		icon: PlaneLanding,
		title: "Airport pickup",
		desc: "Free 60-min wait, named meet-and-greet, bottled water and SIM available on request."
	},
	{
		icon: Clock,
		title: "24/7 customer support",
		desc: "Real humans answer in under 2 minutes — even on the late flight from Doha."
	},
	{
		icon: Shield,
		title: "Fully insured vehicles",
		desc: "Comprehensive passenger insurance and regular technical inspections."
	},
	{
		icon: ThumbsUp,
		title: "Comfortable travel",
		desc: "Air-con tuned for the heat, reclining seats and Wi-Fi on KDH vans."
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-primary",
						children: "Why travellers choose us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl",
						children: "A premium taxi company, the islander way."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "We built TM89 Tours Yala for travellers who expect international standards — without losing the warmth of a small Sri Lankan family business."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hover-lift group rounded-2xl border border-border bg-card p-6",
					style: { animationDelay: `${i * 60}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-xl gradient-primary text-white shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-lg font-bold text-ink",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: f.desc
						})
					]
				}, f.title))
			})]
		})
	});
}
//#endregion
export { Features as n, About as t };

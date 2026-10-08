import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, l as require_react, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ChevronDown } from "../_libs/lucide-react.mjs";
import { r as cn, t as SiteShell } from "./SiteShell-ByHjhE1r.mjs";
import { t as Fleet } from "./Fleet-Cl7p0zuJ.mjs";
import { t as Reviews } from "./Reviews-DfxxqAsp.mjs";
import { t as BookingForm } from "./BookingForm-DnAetXB_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SeoLandingPage-Bqzc03P1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function SeoLandingPage({ h1, content, faqs, image, imageAlt, internalLinks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative h-[60vh] min-h-[400px] w-full bg-slate-900",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: imageAlt,
					className: "h-full w-full object-cover opacity-60",
					loading: "eager"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-center px-4 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl max-w-4xl",
					children: h1
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container mx-auto px-4 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2 prose prose-lg max-w-none prose-headings:text-primary",
					children: content
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-24 rounded-xl border bg-card p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 text-xl font-semibold",
							children: "Book Your Transfer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fleet, {}),
		faqs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container mx-auto px-4 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-8 text-center text-3xl font-bold",
					children: "Frequently Asked Questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full",
					children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${index}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-semibold",
							children: faq.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-muted-foreground",
							children: faq.a
						})]
					}, index))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
		internalLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container mx-auto px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-8 text-center text-3xl font-bold",
					children: "Popular Routes & Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
					children: internalLinks.map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.href,
						className: "rounded-lg bg-background p-4 text-center text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground shadow-sm",
						children: link.title
					}, index))
				})]
			})
		})
	] });
}
//#endregion
export { SeoLandingPage as t };

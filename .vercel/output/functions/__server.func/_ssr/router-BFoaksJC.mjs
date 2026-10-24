import { r as __toESM } from "../_runtime.mjs";
import { n as siteConfig } from "./site-CLHEYpJU.mjs";
import { i as serviceSchema, n as localBusinessSchema, r as seoDefaults, t as faqSchema } from "./seo-CY9R52Br.mjs";
import { n as clusters, t as blogs } from "./seo-content-B1XBcGFM.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$20 } from "../_clusterId-BsD-WgV5.mjs";
import { t as Route$21 } from "../_slug-qmZSVMGm.mjs";
import { n as pageDescription, r as pageTitle, t as faqs } from "./airport-transfer-sri-lanka-BiGcPjDd.mjs";
import { n as pageDescription$1, r as pageTitle$1, t as faqs$1 } from "./private-driver-sri-lanka-BXXGqlzL.mjs";
import { n as pageDescription$2, r as pageTitle$2, t as faqs$2 } from "./yala-safari-transfers-lOZOiTrQ.mjs";
import { n as pageDescription$3, r as pageTitle$3, t as faqs$3 } from "./taxi-colombo-to-unawatuna-B9mdqEbW.mjs";
import { n as pageDescription$4, r as pageTitle$4, t as faqs$4 } from "./taxi-colombo-to-galle-DoB4CVml.mjs";
import { n as pageDescription$5, r as pageTitle$5, t as faqs$5 } from "./taxi-colombo-airport-to-yala-D_jIhmdf.mjs";
import { n as pageDescription$6, r as pageTitle$6, t as faqs$6 } from "./taxi-colombo-airport-to-sigiriya-Trh4wl2o.mjs";
import { n as pageDescription$7, r as pageTitle$7, t as faqs$7 } from "./taxi-colombo-airport-to-mirissa-H6_Hw2sy.mjs";
import { n as pageDescription$8, r as pageTitle$8, t as faqs$8 } from "./taxi-colombo-airport-to-ella-B9z8AiY6.mjs";
import { n as pageDescription$9, r as pageTitle$9, t as faqs$9 } from "./taxi-colombo-airport-to-arugam-bay-CdSAF2rX.mjs";
import { n as pageDescription$10, r as pageTitle$10, t as faqs$10 } from "./sri-lanka-tour-packages-Dtcc_G1s.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BFoaksJC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B1PRX3TO.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$19 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#0F766E"
			},
			{
				property: "og:site_name",
				content: "TM89 Tours Yala"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/logo.jpeg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$19.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$17 = () => import("./yala-safari-transfers-7Ipq6ltX.mjs");
var Route$18 = createFileRoute("/yala-safari-transfers")({
	head: () => ({
		meta: [
			{ title: pageTitle$2 },
			{
				name: "description",
				content: pageDescription$2
			},
			{
				property: "og:title",
				content: pageTitle$2
			},
			{
				property: "og:description",
				content: pageDescription$2
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs$2))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Yala Safari Transfers", pageDescription$2))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./tours-CNXz7zLs.mjs");
var Route$17 = createFileRoute("/tours")({
	head: () => ({
		meta: [
			{ title: `Sri Lanka Tour Packages — ${siteConfig.name}` },
			{
				name: "description",
				content: "Private Sri Lanka tours with your own driver-guide. 3-, 5-, 7- and 9-day packages, or fully custom. Free planning, fixed prices, no hidden fees."
			},
			{
				property: "og:title",
				content: `Sri Lanka Tour Packages — ${siteConfig.name}`
			},
			{
				property: "og:description",
				content: "Private multi-day Sri Lanka tours. Book on WhatsApp."
			},
			{
				property: "og:url",
				content: "/tours"
			}
		],
		links: [{
			rel: "canonical",
			href: "/tours"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./taxi-colombo-to-unawatuna-Cf_aapUD.mjs");
var Route$16 = createFileRoute("/taxi-colombo-to-unawatuna")({
	head: () => ({
		meta: [
			{ title: pageTitle$3 },
			{
				name: "description",
				content: pageDescription$3
			},
			{
				property: "og:title",
				content: pageTitle$3
			},
			{
				property: "og:description",
				content: pageDescription$3
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs$3))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Taxi Colombo to Unawatuna", pageDescription$3))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./taxi-colombo-to-galle-DKjUGk8I.mjs");
var Route$15 = createFileRoute("/taxi-colombo-to-galle")({
	head: () => ({
		meta: [
			{ title: pageTitle$4 },
			{
				name: "description",
				content: pageDescription$4
			},
			{
				property: "og:title",
				content: pageTitle$4
			},
			{
				property: "og:description",
				content: pageDescription$4
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs$4))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Taxi Colombo to Galle", pageDescription$4))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./taxi-colombo-airport-to-yala-C7AG1N-m.mjs");
var Route$14 = createFileRoute("/taxi-colombo-airport-to-yala")({
	head: () => ({
		meta: [
			{ title: pageTitle$5 },
			{
				name: "description",
				content: pageDescription$5
			},
			{
				property: "og:title",
				content: pageTitle$5
			},
			{
				property: "og:description",
				content: pageDescription$5
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs$5))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Taxi Colombo Airport to Yala", pageDescription$5))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./taxi-colombo-airport-to-sigiriya-Cx0CbVso.mjs");
var Route$13 = createFileRoute("/taxi-colombo-airport-to-sigiriya")({
	head: () => ({
		meta: [
			{ title: pageTitle$6 },
			{
				name: "description",
				content: pageDescription$6
			},
			{
				property: "og:title",
				content: pageTitle$6
			},
			{
				property: "og:description",
				content: pageDescription$6
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs$6))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Taxi Colombo Airport to Sigiriya", pageDescription$6))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./taxi-colombo-airport-to-mirissa-DvPILnp4.mjs");
var Route$12 = createFileRoute("/taxi-colombo-airport-to-mirissa")({
	head: () => ({
		meta: [
			{ title: pageTitle$7 },
			{
				name: "description",
				content: pageDescription$7
			},
			{
				property: "og:title",
				content: pageTitle$7
			},
			{
				property: "og:description",
				content: pageDescription$7
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs$7))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Taxi Colombo Airport to Mirissa", pageDescription$7))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./taxi-colombo-airport-to-ella-D0KjSjW-.mjs");
var Route$11 = createFileRoute("/taxi-colombo-airport-to-ella")({
	head: () => ({
		meta: [
			{ title: pageTitle$8 },
			{
				name: "description",
				content: pageDescription$8
			},
			{
				property: "og:title",
				content: pageTitle$8
			},
			{
				property: "og:description",
				content: pageDescription$8
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs$8))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Taxi Colombo Airport to Ella", pageDescription$8))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./taxi-colombo-airport-to-arugam-bay-DkVVB96P.mjs");
var Route$10 = createFileRoute("/taxi-colombo-airport-to-arugam-bay")({
	head: () => ({
		meta: [
			{ title: pageTitle$9 },
			{
				name: "description",
				content: pageDescription$9
			},
			{
				property: "og:title",
				content: pageTitle$9
			},
			{
				property: "og:description",
				content: pageDescription$9
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs$9))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Taxi Colombo Airport to Arugam Bay", pageDescription$9))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./sri-lanka-tour-packages-BUbFhk3g.mjs");
var Route$9 = createFileRoute("/sri-lanka-tour-packages")({
	head: () => ({
		meta: [
			{ title: pageTitle$10 },
			{
				name: "description",
				content: pageDescription$10
			},
			{
				property: "og:title",
				content: pageTitle$10
			},
			{
				property: "og:description",
				content: pageDescription$10
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs$10))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Sri Lanka Tour Packages", pageDescription$10))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const staticPaths = [
		"/",
		"/airport-transfers",
		"/tours",
		"/about",
		"/reviews",
		"/contact",
		"/airport-transfer-sri-lanka",
		"/taxi-colombo-airport-to-yala",
		"/taxi-colombo-airport-to-mirissa",
		"/taxi-colombo-airport-to-ella",
		"/taxi-colombo-airport-to-sigiriya",
		"/taxi-colombo-airport-to-arugam-bay",
		"/taxi-colombo-to-galle",
		"/taxi-colombo-to-unawatuna",
		"/private-driver-sri-lanka",
		"/sri-lanka-tour-packages",
		"/yala-safari-transfers",
		"/blog"
	];
	const blogPaths = blogs.map((b) => `/blog/${b.slug}`);
	const clusterPaths = clusters.map((c) => `/clusters/${c.id}`);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		...staticPaths,
		...blogPaths,
		...clusterPaths
	].map((p) => `  <url><loc>${siteConfig.url}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$7 = () => import("./reviews-DggQZODL.mjs");
var Route$7 = createFileRoute("/reviews")({
	head: () => ({
		meta: [
			{ title: `Reviews — ${siteConfig.name}` },
			{
				name: "description",
				content: `Read 1,200+ verified five-star Google reviews from international travellers who chose ${siteConfig.name} for Sri Lanka airport transfers and tours.`
			},
			{
				property: "og:title",
				content: `Reviews — ${siteConfig.name}`
			},
			{
				property: "og:description",
				content: "4.9-star reviews from real travellers across the world."
			},
			{
				property: "og:url",
				content: "/reviews"
			}
		],
		links: [{
			rel: "canonical",
			href: "/reviews"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./private-driver-sri-lanka-DNVGjBp3.mjs");
var Route$6 = createFileRoute("/private-driver-sri-lanka")({
	head: () => ({
		meta: [
			{ title: pageTitle$1 },
			{
				name: "description",
				content: pageDescription$1
			},
			{
				property: "og:title",
				content: pageTitle$1
			},
			{
				property: "og:description",
				content: pageDescription$1
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs$1))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Private Driver Sri Lanka", pageDescription$1))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-D6lPmt4B.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: `Contact — ${siteConfig.name}` },
			{
				name: "description",
				content: `Reach ${siteConfig.name} 24/7 on WhatsApp, phone or email. Office in Tissamaharama, Yala, Sri Lanka.`
			},
			{
				property: "og:title",
				content: `Contact — ${siteConfig.name}`
			},
			{
				property: "og:description",
				content: "24/7 WhatsApp booking and customer support."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./airport-transfers-5CURNalJ.mjs");
var Route$4 = createFileRoute("/airport-transfers")({
	head: () => ({
		meta: [
			{ title: `Airport Transfers — ${siteConfig.name}` },
			{
				name: "description",
				content: "Fixed-price Bandaranaike Airport (CMB) transfers to Colombo, Kandy, Galle, Ella, Yala, Mirissa and Sigiriya. Meet-and-greet, free 60-min wait, 24/7 booking."
			},
			{
				property: "og:title",
				content: `Airport Transfers — ${siteConfig.name}`
			},
			{
				property: "og:description",
				content: "Fixed-price airport transfers across Sri Lanka. Book on WhatsApp."
			},
			{
				property: "og:url",
				content: "/airport-transfers"
			}
		],
		links: [{
			rel: "canonical",
			href: "/airport-transfers"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./airport-transfer-sri-lanka-3VDUThRY.mjs");
var Route$3 = createFileRoute("/airport-transfer-sri-lanka")({
	head: () => ({
		meta: [
			{ title: pageTitle },
			{
				name: "description",
				content: pageDescription
			},
			{
				property: "og:title",
				content: pageTitle
			},
			{
				property: "og:description",
				content: pageDescription
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema(faqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema("Airport Transfer Sri Lanka", pageDescription))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-CZ3LxKZd.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: `About — ${siteConfig.name}` },
			{
				name: "description",
				content: `Family-run Sri Lankan taxi & tour company since 2013. 30+ licensed drivers, islandwide coverage, 1,200+ five-star reviews.`
			},
			{
				property: "og:title",
				content: `About — ${siteConfig.name}`
			},
			{
				property: "og:description",
				content: "Family-run Sri Lankan taxi & tour company since 2013."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-B9QW8bWv.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: seoDefaults.defaultTitle },
			{
				name: "description",
				content: seoDefaults.description
			},
			{
				name: "keywords",
				content: seoDefaults.keywords.join(", ")
			},
			{
				property: "og:title",
				content: seoDefaults.defaultTitle
			},
			{
				property: "og:description",
				content: seoDefaults.description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: seoDefaults.url
			},
			{
				property: "og:image",
				content: seoDefaults.ogImage
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: seoDefaults.url
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(localBusinessSchema)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog-BurkPX7w.mjs");
var Route = createFileRoute("/blog/")({
	head: () => ({ meta: [{ title: "Sri Lanka Travel Blog | Taxi & Tour Guides" }, {
		name: "description",
		content: "Read our Sri Lanka travel blog for the best tips on hiring taxis, private drivers, and planning your island itinerary."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var YalaSafariTransfersRoute = Route$18.update({
	id: "/yala-safari-transfers",
	path: "/yala-safari-transfers",
	getParentRoute: () => Route$19
});
var ToursRoute = Route$17.update({
	id: "/tours",
	path: "/tours",
	getParentRoute: () => Route$19
});
var TaxiColomboToUnawatunaRoute = Route$16.update({
	id: "/taxi-colombo-to-unawatuna",
	path: "/taxi-colombo-to-unawatuna",
	getParentRoute: () => Route$19
});
var TaxiColomboToGalleRoute = Route$15.update({
	id: "/taxi-colombo-to-galle",
	path: "/taxi-colombo-to-galle",
	getParentRoute: () => Route$19
});
var TaxiColomboAirportToYalaRoute = Route$14.update({
	id: "/taxi-colombo-airport-to-yala",
	path: "/taxi-colombo-airport-to-yala",
	getParentRoute: () => Route$19
});
var TaxiColomboAirportToSigiriyaRoute = Route$13.update({
	id: "/taxi-colombo-airport-to-sigiriya",
	path: "/taxi-colombo-airport-to-sigiriya",
	getParentRoute: () => Route$19
});
var TaxiColomboAirportToMirissaRoute = Route$12.update({
	id: "/taxi-colombo-airport-to-mirissa",
	path: "/taxi-colombo-airport-to-mirissa",
	getParentRoute: () => Route$19
});
var TaxiColomboAirportToEllaRoute = Route$11.update({
	id: "/taxi-colombo-airport-to-ella",
	path: "/taxi-colombo-airport-to-ella",
	getParentRoute: () => Route$19
});
var TaxiColomboAirportToArugamBayRoute = Route$10.update({
	id: "/taxi-colombo-airport-to-arugam-bay",
	path: "/taxi-colombo-airport-to-arugam-bay",
	getParentRoute: () => Route$19
});
var SriLankaTourPackagesRoute = Route$9.update({
	id: "/sri-lanka-tour-packages",
	path: "/sri-lanka-tour-packages",
	getParentRoute: () => Route$19
});
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$19
});
var ReviewsRoute = Route$7.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => Route$19
});
var PrivateDriverSriLankaRoute = Route$6.update({
	id: "/private-driver-sri-lanka",
	path: "/private-driver-sri-lanka",
	getParentRoute: () => Route$19
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$19
});
var AirportTransfersRoute = Route$4.update({
	id: "/airport-transfers",
	path: "/airport-transfers",
	getParentRoute: () => Route$19
});
var AirportTransferSriLankaRoute = Route$3.update({
	id: "/airport-transfer-sri-lanka",
	path: "/airport-transfer-sri-lanka",
	getParentRoute: () => Route$19
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$19
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var BlogIndexRoute = Route.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$19
});
var ClustersClusterIdRoute = Route$20.update({
	id: "/clusters/$clusterId",
	path: "/clusters/$clusterId",
	getParentRoute: () => Route$19
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AirportTransferSriLankaRoute,
	AirportTransfersRoute,
	ContactRoute,
	PrivateDriverSriLankaRoute,
	ReviewsRoute,
	SitemapDotxmlRoute,
	SriLankaTourPackagesRoute,
	TaxiColomboAirportToArugamBayRoute,
	TaxiColomboAirportToEllaRoute,
	TaxiColomboAirportToMirissaRoute,
	TaxiColomboAirportToSigiriyaRoute,
	TaxiColomboAirportToYalaRoute,
	TaxiColomboToGalleRoute,
	TaxiColomboToUnawatunaRoute,
	ToursRoute,
	YalaSafariTransfersRoute,
	BlogSlugRoute: Route$21.update({
		id: "/blog/$slug",
		path: "/blog/$slug",
		getParentRoute: () => Route$19
	}),
	ClustersClusterIdRoute,
	BlogIndexRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

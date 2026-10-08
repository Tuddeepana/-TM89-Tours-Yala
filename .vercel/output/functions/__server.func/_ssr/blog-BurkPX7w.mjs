import { t as blogs } from "./seo-content-B1XBcGFM.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./SiteShell-ByHjhE1r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-BurkPX7w.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container mx-auto px-4 py-16",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "mb-8 text-4xl font-bold",
		children: "Sri Lanka Travel Blog"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
		children: blogs.map((blog) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: `/blog/${blog.slug}`,
			className: "group block overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-video overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: blog.image,
					alt: blog.title,
					className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-xl font-semibold group-hover:text-primary",
					children: blog.h1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-muted-foreground",
					children: blog.description
				})]
			})]
		}, blog.slug))
	})]
}) });
//#endregion
export { SplitComponent as component };

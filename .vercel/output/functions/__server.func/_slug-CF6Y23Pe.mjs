import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as SeoLandingPage } from "./_ssr/SeoLandingPage-Bqzc03P1.mjs";
import { t as Route } from "./_slug-VwhXH9KY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CF6Y23Pe.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => {
	const blog = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoLandingPage, {
		title: blog.title,
		description: blog.description,
		h1: blog.h1,
		image: blog.image,
		imageAlt: blog.h1,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: blog.content }),
		faqs: [],
		internalLinks: [{
			title: "Airport Transfer Sri Lanka",
			href: "/airport-transfer-sri-lanka"
		}, {
			title: "Private Driver Sri Lanka",
			href: "/private-driver-sri-lanka"
		}]
	});
};
//#endregion
export { SplitComponent as component };

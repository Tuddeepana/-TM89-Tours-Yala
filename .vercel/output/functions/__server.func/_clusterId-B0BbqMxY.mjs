import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Route } from "./_clusterId-puStUFxJ.mjs";
import { t as SeoLandingPage } from "./_ssr/SeoLandingPage-Bqzc03P1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_clusterId-B0BbqMxY.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => {
	const cluster = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoLandingPage, {
		title: cluster.title,
		description: cluster.description,
		h1: cluster.h1,
		image: cluster.image,
		imageAlt: cluster.h1,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: cluster.content }),
		faqs: [],
		internalLinks: [{
			title: "Airport Transfer Sri Lanka",
			href: "/airport-transfer-sri-lanka"
		}, {
			title: "Sri Lanka Tour Packages",
			href: "/sri-lanka-tour-packages"
		}]
	});
};
//#endregion
export { SplitComponent as component };

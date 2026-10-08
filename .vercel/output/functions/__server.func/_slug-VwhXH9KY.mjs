import { n as localBusinessSchema } from "./_ssr/seo-CY9R52Br.mjs";
import { t as blogs } from "./_ssr/seo-content-B1XBcGFM.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-VwhXH9KY.js
var $$splitComponentImporter = () => import("./_slug-CF6Y23Pe.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params: { slug } }) => {
		const blog = blogs.find((b) => b.slug === slug);
		if (!blog) throw notFound();
		return blog;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [] };
		return {
			meta: [
				{ title: loaderData.title },
				{
					name: "description",
					content: loaderData.description
				},
				{
					property: "og:title",
					content: loaderData.title
				},
				{
					property: "og:description",
					content: loaderData.description
				},
				{
					property: "og:image",
					content: loaderData.image
				}
			],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(localBusinessSchema)
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

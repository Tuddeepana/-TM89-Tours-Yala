import { n as localBusinessSchema } from "./_ssr/seo-CY9R52Br.mjs";
import { n as clusters } from "./_ssr/seo-content-B1XBcGFM.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_clusterId-BsD-WgV5.js
var $$splitComponentImporter = () => import("./_clusterId-DaxkuVSO.mjs");
var Route = createFileRoute("/clusters/$clusterId")({
	loader: ({ params: { clusterId } }) => {
		const cluster = clusters.find((c) => c.id === clusterId);
		if (!cluster) throw notFound();
		return cluster;
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

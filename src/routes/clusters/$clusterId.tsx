import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { clusters } from "@/lib/data/seo-content";
import { localBusinessSchema } from "@/config/seo";

export const Route = createFileRoute("/clusters/$clusterId")({
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
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:image", content: loaderData.image },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      ],
    };
  },
  component: () => {
    const cluster = Route.useLoaderData();
    return (
      <SeoLandingPage
        title={cluster.title}
        description={cluster.description}
        h1={cluster.h1}
        image={cluster.image}
        imageAlt={cluster.h1}
        content={<p>{cluster.content}</p>}
        faqs={[]}
        internalLinks={[
          { title: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
          { title: "Sri Lanka Tour Packages", href: "/sri-lanka-tour-packages" },
        ]}
      />
    );
  },
});

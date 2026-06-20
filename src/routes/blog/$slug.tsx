import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { blogs } from "@/lib/data/seo-content";
import { localBusinessSchema } from "@/config/seo";

export const Route = createFileRoute("/blog/$slug")({
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
    const blog = Route.useLoaderData();
    return (
      <SeoLandingPage
        title={blog.title}
        description={blog.description}
        h1={blog.h1}
        image={blog.image}
        imageAlt={blog.h1}
        content={<p>{blog.content}</p>}
        faqs={[]}
        internalLinks={[
          { title: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
          { title: "Private Driver Sri Lanka", href: "/private-driver-sri-lanka" },
        ]}
      />
    );
  },
});

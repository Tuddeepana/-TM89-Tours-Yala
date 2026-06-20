import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { blogs } from "@/lib/data/seo-content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Sri Lanka Travel Blog | Taxi & Tour Guides" },
      { name: "description", content: "Read our Sri Lanka travel blog for the best tips on hiring taxis, private drivers, and planning your island itinerary." },
    ],
  }),
  component: () => (
    <SiteShell>
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Sri Lanka Travel Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link key={blog.slug} to={`/blog/${blog.slug}`} className="group block overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-xl font-semibold group-hover:text-primary">{blog.h1}</h2>
                <p className="line-clamp-2 text-muted-foreground">{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  ),
});

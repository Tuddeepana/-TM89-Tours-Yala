import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteConfig } from "@/config/site";
import { blogs, clusters } from "@/lib/data/seo-content";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
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
        
        const blogPaths = blogs.map(b => `/blog/${b.slug}`);
        const clusterPaths = clusters.map(c => `/clusters/${c.id}`);
        
        const paths = [...staticPaths, ...blogPaths, ...clusterPaths];
        
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${siteConfig.url}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

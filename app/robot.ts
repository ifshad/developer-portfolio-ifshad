import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/#about", "/#projects", "/#services"],
      disallow: "/private/",
    },
    sitemap: "https://ifshads-code-journey.vercel.app/sitemap.xml",
  };
}

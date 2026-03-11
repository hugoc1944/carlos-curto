import type { MetadataRoute } from "next";

const BASE_URL = "https://carloscurto.pt";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
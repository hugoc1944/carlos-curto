import type { MetadataRoute } from "next";
import { getEcritSlugs } from "@/lib/ecrits";

const BASE_URL = "https://carloscurto.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  const ecrits = getEcritSlugs();

  const staticPages = [
    "/",
    "/coaching",
    "/consultas",
    "/contacto",
    "/internacional",
    "/reflexoes",
    "/politica-de-privacidade",
    "/politica-de-cookies",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));

  const ecritsRoutes = ecrits.map((slug) => ({
    url: `${BASE_URL}/reflexoes/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...ecritsRoutes];
}
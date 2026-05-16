import { MetadataRoute } from "next";

const base = "https://samuelforrest.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  ];
}

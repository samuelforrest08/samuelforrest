import { MetadataRoute } from "next";
import postsData from "./posts.json";
import projectsData from "./projects.json";

const base = "https://samuelforrest.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = postsData.posts.map(post => ({
    url: `${base}/${new Date(post.date).getFullYear()}/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projects = projectsData.projects.map(project => ({
    url: `${base}/projects/${project.id}`,
    lastModified: new Date(project.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...posts,
    ...projects,
  ];
}

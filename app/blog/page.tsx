import { Posts } from "../posts";
import { getPosts } from "../get-posts";

export const revalidate = 300;

export const metadata = {
  title: "Blog",
  description: "Writing on software development, projects and technology.",
  openGraph: {
    title: "Blog | Samuel Forrest",
    description: "Writing on software development, projects and technology.",
  },
};

export default async function Blog() {
  const posts = await getPosts();
  return <Posts posts={posts} />;
}

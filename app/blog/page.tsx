import { Posts } from "../posts";
import { getPosts } from "../get-posts";

export const revalidate = 300;

export default async function Blog() {
  const posts = await getPosts();
  return <Posts posts={posts} />;
}

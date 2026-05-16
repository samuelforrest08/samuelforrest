import { Posts } from "./posts";
import { getPosts } from "./get-posts";

export async function HomePosts() {
  const posts = await getPosts();
  return <Posts posts={posts} />;
}

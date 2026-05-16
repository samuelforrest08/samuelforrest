import { Posts } from "./posts";
import { HomePostList } from "./home-post-list";
import { getPosts } from "./get-posts";

export async function HomePosts() {
  const posts = await getPosts();
  return <Posts posts={posts} />;
}

export async function HomePostListServer() {
  const posts = await getPosts();
  return <HomePostList posts={posts} />;
}

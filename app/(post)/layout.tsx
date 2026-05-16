import { Header } from "./header";
import { getPosts } from "../get-posts";
import { getProjects } from "../get-projects";

export const revalidate = 300;

export default async function Layout({ children }) {
  const [posts, projects] = await Promise.all([getPosts(), getProjects()]);

  return (
    <article className="text-gray-800 dark:text-gray-300 mb-10">
      <Header posts={[...posts, ...projects]} />
      {children}
    </article>
  );
}

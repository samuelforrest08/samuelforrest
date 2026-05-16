import { Projects } from "../projects";
import { getProjects } from "../get-projects";

export const metadata = {
  title: "Projects",
  description: "Software projects built by Samuel Forrest — client work, personal builds and more.",
  openGraph: {
    title: "Projects | Samuel Forrest",
    description: "Software projects built by Samuel Forrest — client work, personal builds and more.",
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <Projects projects={projects} />;
}

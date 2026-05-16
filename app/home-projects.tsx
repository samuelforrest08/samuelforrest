import { Projects } from "./projects";
import { getProjects } from "./get-projects";

export async function HomeProjects() {
  const projects = await getProjects();
  return <Projects projects={projects} />;
}

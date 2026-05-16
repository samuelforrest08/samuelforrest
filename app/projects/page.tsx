import { Projects } from "../projects";

export const metadata = {
  title: "Projects",
  description: "Software projects built by Samuel Forrest — client work, personal builds and more.",
  openGraph: {
    title: "Projects | Samuel Forrest",
    description: "Software projects built by Samuel Forrest — client work, personal builds and more.",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}

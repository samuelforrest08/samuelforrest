"use client";

import { Suspense } from "react";
import Link from "next/link";
import projectsData from "./projects.json";

type Project = {
  id: string;
  date: string;
  title: string;
};

export function Projects() {
  const projects: Project[] = projectsData.projects;

  return (
    <Suspense fallback={null}>
      <main className="max-w-2xl m-auto mb-10 text-sm">
        <ul>
          {projects.map((project, i) => {
            const year = getYear(project.date);
            const firstOfYear =
              !projects[i - 1] || getYear(projects[i - 1].date) !== year;
            const lastOfYear =
              !projects[i + 1] || getYear(projects[i + 1].date) !== year;

            return (
              <li key={project.id} className="group">
                <Link href={`/projects/${project.id}`}>
                  <span
                    className={`flex ${!firstOfYear ? "border-t-0" : ""} ${lastOfYear ? "border-b-0" : ""}`}
                  >
                    <span
                      className={`py-2 flex grow items-center ${!firstOfYear ? "ml-10 md:ml-14" : ""}`}
                    >
                      {firstOfYear && (
                        <span className="w-10 md:w-14 inline-block self-start shrink-0 text-neutral-500 text-xs dark:text-neutral-500 mt-0.5">
                          {year}
                        </span>
                      )}
                      <span className="grow dark:text-gray-100">
                        <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-all rounded-xl py-0.5 px-1.5">
                          {project.title}
                        </span>
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </Suspense>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}

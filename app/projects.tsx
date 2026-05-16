"use client";

import { Suspense } from "react";
import Link from "next/link";
import useSWR from "swr";
import type { Project } from "./get-projects";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function Projects({ projects: initialProjects }: { projects: Project[] }) {
  const { data: projects } = useSWR("/api/projects", fetcher, {
    fallbackData: initialProjects,
    refreshInterval: 5000,
  });

  return (
    <Suspense fallback={null}>
      <main className="max-w-2xl m-auto mb-10 text-sm">
        <ul>
          {projects.map((project: Project, i: number) => {
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
                      <span className="text-neutral-500 dark:text-neutral-500 text-xs mt-0.5">
                        {project.viewsFormatted}
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

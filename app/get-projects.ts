import projectsData from "./projects.json";
import redis from "./redis";
import commaNumber from "comma-number";

export type Project = {
  id: string;
  date: string;
  title: string;
  views: number;
  viewsFormatted: string;
};

type Views = {
  [key: string]: string;
};

export const getProjects = async () => {
  const allViews: null | Views = redis ? await redis.hgetall("views") : null;
  return projectsData.projects.map((project): Project => {
    const views = Number(allViews?.[project.id] ?? 0);
    return {
      ...project,
      views,
      viewsFormatted: commaNumber(views),
    };
  });
};

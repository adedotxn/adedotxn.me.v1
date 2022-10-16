export interface ProjectsInterface {
  tag: "Active" | "Ongoing" | "Stale" | "Inactive";
  category: string;
  name: string;
  details: string;
  id: number;
  gitlink?: URL;
  livelink?: URL;
  stack: string[];
}

export type ProjectsWithoutStack = Omit<
  ProjectsInterface,
  "stack" | "category"
>;

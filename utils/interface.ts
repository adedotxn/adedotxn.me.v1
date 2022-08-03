export interface ProjectsInterface {
    category: string;
    name: string;
    details: string;
    id: number;
    gitlink?: URL;
    livelink?: URL;
    stack : string[],
}

export type ProjectsWithoutStack = Omit<ProjectsInterface, 'stack' | 'category'>
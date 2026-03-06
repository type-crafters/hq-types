import type { ProjectStatus } from "./ProjectStatus.js";

export interface ProjectItem {
    id: string;
    projectName: string;
    thumbnailUrl: string;
    status: ProjectStatus;
    description: string;
    content?: string;
    tags: Set<string>;
    href: string;
    createdAt: number;
    lastUpdatedAt: number;
}
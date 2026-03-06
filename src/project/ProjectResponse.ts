import type { ProjectStatus } from "./ProjectStatus.js";

export interface ProjectResponse {
    id: string;
    projectName: string;
    thumbnailUrl: string;
    status: ProjectStatus;
    description: string;
    content?: string;
    tags: string[];
    href: string;
    createdAt: number;
    lastUpdatedAt: number;
}
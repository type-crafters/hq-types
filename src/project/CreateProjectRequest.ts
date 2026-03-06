import type { ProjectStatus } from "./ProjectStatus.js";

export interface CreateProjectRequest {
    projectName: string;
    thumbnailUrl: string;
    status: ProjectStatus;
    description: string;
    content?: string;
    tags: string[];
    href: string;
}
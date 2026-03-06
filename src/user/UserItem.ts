import type { ColorScheme } from "./ColorScheme.js";
import type { UserStatus } from "./UserStatus.js";

export interface UserItem {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePictureUrl: string;
    status: UserStatus;
    preferredTheme: ColorScheme;
    permissions: Set<string>;
    createdAt: number;
    lastUpdatedAt: number;
}
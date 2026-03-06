import type { VerificationTokenType } from "./VerificationTokenType.js";

export interface VerificationTokenItem {
    token: string;
    sub: string;
    type: VerificationTokenType;
    createdAt: number;
    expiresAt: number;
}
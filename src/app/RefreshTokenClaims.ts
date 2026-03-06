export interface RefreshTokenClaims {
    jti: string;
    iat: number
    exp: number;
    sub: string;
}
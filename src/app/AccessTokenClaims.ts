export interface AccessTokenClaims {
    jti: string;
    iat: number
    exp: number;
    sub: string;
    eml: string;
    prm: string[]
}
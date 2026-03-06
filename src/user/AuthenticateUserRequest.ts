export interface AuthenticateUserRequest {
    email: string;
    password: string;
    rememberMe: boolean;
}
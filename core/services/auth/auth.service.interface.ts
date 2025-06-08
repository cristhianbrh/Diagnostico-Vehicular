import { LoginResponse, UserRegister } from "@/types/auth";

export interface IAuthService {
    login(email: string, password: string): Promise<LoginResponse>;
    register(userRegister: UserRegister): Promise<LoginResponse>;
    logout(): void;
}
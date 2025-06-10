import { UserRegister } from "@/types/auth";
import { UserResponse } from "@/types/user";

export interface IAuthService {
    login(email: string, password: string): Promise<UserResponse>;
    register(userRegister: UserRegister): Promise<UserResponse>;
    logout(): void;
}
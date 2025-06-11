import { UserRegister } from "@/types/auth.type";
import { UserResponse } from "@/types/user.type";

export interface IAuthService {
    login(email: string, password: string): Promise<UserResponse>;
    register(userRegister: UserRegister): Promise<UserResponse>;
    logout(): void;
}
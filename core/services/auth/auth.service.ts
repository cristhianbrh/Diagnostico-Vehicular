import { UserRegister } from "@/types/auth.type";
import { IAuthService } from "./auth.service.interface";
import axios from "axios";
import { UserResponse } from "@/types/user.type";
import { parseError } from "@/lib/utils";

class AuthService implements IAuthService {
    public async login(email: string, password: string): Promise<UserResponse> {
        try {
            const { data: response } = await axios.post<UserResponse>(`${process.env.API_URL}/api/auth/login`, { 
                email: email,
                password: password,
            })
            return response;

        } catch (error: any) {
            return { error: parseError(error) };
        }
    }

    public async register(userRegister : UserRegister) : Promise<UserResponse> {
        try {
            const { data: response} = await axios.post(`${process.env.API_URL}/api/auth/register`, { 
                email:  userRegister.email,
                password: userRegister.password,
                name: userRegister.name,
                role: userRegister.role,
            })
            return response;

        } catch (error: any) {
            return { error: parseError(error) };
        }
    }

    public async logout() {
        localStorage.removeItem("token");
    }
}

export { AuthService };
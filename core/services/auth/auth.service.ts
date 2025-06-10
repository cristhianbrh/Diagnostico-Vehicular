import { appUrl } from "@/constants/url-app";
import { UserRegister } from "@/types/auth";
import { IAuthService } from "./auth.service.interface";
import axios from "axios";
import { UserResponse } from "@/types/user";
import { parseError } from "@/lib/utils";

class AuthService implements IAuthService {
    public async login(email: string, password: string): Promise<UserResponse> {
        try {
            const { data: response } = await axios.post<UserResponse>(`${appUrl}/api/auth/login`, { 
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
            const { data: response} = await axios.post(`${appUrl}/api/auth/register`, { 
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
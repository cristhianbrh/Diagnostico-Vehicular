import { appUrl } from "@/constants/url-app";
import { LoginResponse, UserRegister } from "@/types/auth";
import { IAuthService } from "./auth.service.interface";
import axios from "axios";

class AuthService implements IAuthService {
    public async login(email: string, password: string): Promise<LoginResponse> {
        try {
            const response = await axios.post<LoginResponse>(`${appUrl}/api/auth/login`, {
                email: email,
                password: password,
            })
            return response.data;

        } catch (error: any) {
            const msg : string = error.response?.data?.error || error.message || "Error desconocido";
            return { error: msg };
        }
    }

    public async register(userRegister : UserRegister) : Promise<LoginResponse> {
        try {
            const response = await axios.post(`${appUrl}/api/auth/register`, { 
                email:  userRegister.email,
                password: userRegister.password,
                name: userRegister.name,
                role: userRegister.role,
            })
            return response.data;

        } catch (error: any) {
            const msg : string = error.response?.data?.error || error.message || "Error desconocido";
            return { error: msg };
        }
    }

    public async logout() {
        localStorage.removeItem("token");
    }
}

export { AuthService };
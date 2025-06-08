import axios from "axios"

type UserRegister = {
  email: string;
  password: string;
  name: string;
  role: "admin" | "cliente" | "tecnico";
}

type LoginResponse = {
  error?: string;
  message?: string;
  user?: UserSummary;
  token?: string;
}

const url = "http://localhost:3000";

export class AuthService {
    public static async login(email: string, password: string) : Promise<LoginResponse> {
        try {
            const response = await axios.post<LoginResponse>(`${url}/api/auth/login`, {
                email: email,
                password: password,
            })
            return response.data;

        } catch (error: any) {
            const msg : string = error.response?.data?.error || error.message || "Error desconocido";
            return { error: msg };
        }
    }

    public static async register(userRegister : UserRegister) : Promise<LoginResponse> {
        try {
            const response = await axios.post(`${url}/api/auth/register`, { 
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
}
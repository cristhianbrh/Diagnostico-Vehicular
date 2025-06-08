import { injectable } from 'tsyringe';
import { UserSummary, UserSummaryEdit } from "@/types/user";
import { IUserService } from "./user.service.interface";
import axios from 'axios';
import { LoginResponse } from '@/types/auth';
import { appUrl } from '@/constants/url-app';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

@injectable()
export class UserService implements IUserService {

    public async getCurrentUser(): Promise<UserSummary | null> {
        try {
            const token = localStorage.getItem("token")
            if(!token) return null;
            const response = await axios.get<LoginResponse>(`${appUrl}/api/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
            const userSummary = response.data.user!;
            return {
                id: userSummary.id,
                name: userSummary.name,
                email: userSummary.email,
                role: userSummary.role,
            }
        } catch (error: any) {
            localStorage.removeItem("token");
            return null;
        }
    }

    public async getUserName(userId: number): Promise<string> {
        try {
            const { name } = await prisma.user.findUniqueOrThrow({ where: { id: userId } }); 
            return name;
        } catch (error: any) {
            return "Usuario no encontrado";
        }
    }

    public async getUsers(listParams?: { limit?: number; offset?: number; }): Promise<UserSummary[]> {
        const { limit = 10, offset = 0 } = listParams || {};
        try {
            const response = await axios.get<UserSummary[]>(`${appUrl}/api/users/getUsers?limit=${limit}&offset=${offset}`);
            return response.data;
        } catch (error: any) {
            return [];
        }
    }

    public async updateUser(userId: number, userData: UserSummaryEdit): Promise<UserSummary | { error?: string }> {
        try {
            const { data: response } = await axios.put<LoginResponse>(`${appUrl}/api/users/updateUser`, {
                id: userId,
                ...userData
            });

            if(response.user === undefined) return { error: response.error! };

            return {
                id: response.user.id,
                name: response.user.name,
                email: response.user.email,
                role: response.user.role,
            };
        } catch (error: any) {
            return { error: error.response?.data?.error || error.message || "Error al actualizar usuario" };
        }
    }
}
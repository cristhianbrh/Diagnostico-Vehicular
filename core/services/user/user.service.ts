import { injectable } from 'tsyringe';
import { UserResponse, UserSummary, UserSummaryEdit } from "@/types/user";
import { IUserService } from "./user.service.interface";
import axios from 'axios';
import { appUrl } from '@/constants/url-app';
import { PrismaClient } from '@/generated/prisma';
import { parseError } from '@/lib/utils';
import { ApiResponse } from '@/types/custom-response';

const prisma = new PrismaClient();

@injectable()
export class UserService implements IUserService {

    public async getCurrentUser(): Promise<UserResponse> {
        try {
            const token = localStorage.getItem("token")
            if(!token) return { error: "No se ha iniciado sesión" };

            const { data: { data: user, error} } = await axios.get<UserResponse>(
                `${appUrl}/api/auth/me`,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if(user) return { data: user };
            return { error };
        } catch (error: any) {
            localStorage.removeItem("token");
            return { error: parseError(error) };
        }
    }

    public async getUserName(userId: number): Promise<ApiResponse<string>> {
        try {
            const { name: data } = await prisma.user.findUniqueOrThrow({ where: { id: userId } }); 
            return { data };
        } catch (error: any) {
            return {error: parseError(error)};
        }
    }

    public async getUsers(listParams?: { limit?: number; offset?: number; }): Promise<ApiResponse<UserSummary[]>> {
        const { limit = 10, offset = 0 } = listParams || {};
        try {
            const { data: response } = await axios.get<ApiResponse<UserSummary[]>>(`${appUrl}/api/users/getUsers?limit=${limit}&offset=${offset}`);
            return response;
        } catch (error: any) {
            return { error: parseError(error) };
        }
    }

    public async updateUser(userId: number, userData: UserSummaryEdit): Promise<UserResponse> {
        try {
            const { data: { data: user, error } } = await axios.put<UserResponse>(`${appUrl}/api/users/updateUser`, {
                id: userId,
                ...userData
            });

            if(user) return { data: user };
            return { error };
        } catch (error: any) {
            return { error: parseError(error) };
        }
    }
}
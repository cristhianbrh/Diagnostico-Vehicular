
import { UserSummary, UserSummaryEdit } from "@/types/user";

export interface IUserService {
    getCurrentUser(): Promise<UserSummary | null>;
    getUserName(userId: number): Promise<string>;
    getUsers(listParams?: { limit?: number; offset?: number; }): Promise<UserSummary[]>; 
    updateUser(userId: number, userData: UserSummaryEdit): Promise<UserSummary | { error?: string }>;
}
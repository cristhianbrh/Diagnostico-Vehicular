import { ApiResponse } from "@/types/custom-response.type";
import { UserResponse, UserSummary, UserSummaryEdit } from "@/types/user.type";

export interface IUserService {
    getCurrentUser(): Promise<UserResponse>;
    getUserName(userId: number): Promise<ApiResponse<string>>;
    getUsers(listParams?: { limit?: number; offset?: number; }): Promise<ApiResponse<UserSummary[]>>; 
    updateUser(userId: number, userData: UserSummaryEdit): Promise<UserResponse>;
}
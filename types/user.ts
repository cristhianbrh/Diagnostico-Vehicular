import { User } from "@/generated/prisma";
import { ApiResponse } from "./custom-response";

export type UserSummary = Pick<User, "id" | "email" | "name" | "role"> & Partial<Pick<User, "active">>;

export type UserSummaryEdit = Partial<
  Pick<User, "email" | "name" | "role" | "active">
>;

export type UserResponse = ApiResponse<UserSummary>; 
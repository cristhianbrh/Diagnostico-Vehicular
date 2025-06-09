import { User } from "@/generated/prisma";
import { CustomResponse } from "./custom-response";
import { UserSummary } from "./user";

export type UserRole = "admin" | "cliente" | "tecnico";
export type UserRegister = Pick<User, "email" | "password" | "name" | "role">;

export type AuthFormData = Partial<UserRegister>;
export type AuthErrors = AuthFormData & { auth: string};

export type LoginResponse = CustomResponse<UserSummary>;
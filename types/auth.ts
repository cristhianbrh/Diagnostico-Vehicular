import { User } from "@/generated/prisma";

export type UserRole = "admin" | "cliente" | "tecnico";
export type UserRegister = Pick<User, "email" | "password" | "name" | "role">;

export type AuthFormData = Partial<UserRegister>;
export type AuthErrors = AuthFormData & { auth: string};
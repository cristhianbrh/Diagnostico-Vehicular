import { UserSummary } from "./user";

export type UserRole = "admin" | "cliente" | "tecnico";

export type AuthFormData = {
  name?: string;
  email?: string;
  password?: string;
  role?: UserRole;
}

export type AuthErrors = {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  auth?: string;
}

export type UserRegister = {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

export type LoginResponse = {
  error?: string;
  message?: string;
  user?: UserSummary;
  token?: string;
}
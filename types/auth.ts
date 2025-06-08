import { UserSummary } from "./user";

export type AuthFormData = {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
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
  role: "admin" | "cliente" | "tecnico";
}

export type LoginResponse = {
  error?: string;
  message?: string;
  user?: UserSummary;
  token?: string;
}
import { UserRole } from "./auth";

export type UserSummary = {
  id: number;
  email: string;
  name: string;
  role: UserRole;
  active?: boolean;
}

export type UserSummaryEdit = {
  email?: string;
  name?: string;
  role?: UserRole;
  active?: boolean;
}
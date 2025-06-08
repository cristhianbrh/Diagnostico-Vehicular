export type UserSummary = {
  id: number;
  email: string;
  name: string;
  role: "admin" | "cliente" | "tecnico";
  active?: boolean;
}

export type UserSummaryEdit = {
  email?: string;
  name?: string;
  role?: "admin" | "cliente" | "tecnico";
  active?: boolean;
}
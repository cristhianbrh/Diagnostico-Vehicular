export type UserSummary = {
  id: number;
  email: string;
  name: string;
  role: string;
  active?: boolean;
}

export type UserSummaryEdit = {
  email?: string;
  name?: string;
  role?: string;
  active?: boolean;
}
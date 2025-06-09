import { User } from "@/generated/prisma";

export type UserSummary = Pick<User, "id" | "email" | "name" | "role"> & Partial<Pick<User, "active">>;

export type UserSummaryEdit = Partial<
  Pick<User, "email" | "name" | "role" | "active">
>;
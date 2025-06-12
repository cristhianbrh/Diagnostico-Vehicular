import { Symptom } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";

export interface ISymptomService {
  getAll(): Promise<ApiResponse<Symptom[]>>;
}
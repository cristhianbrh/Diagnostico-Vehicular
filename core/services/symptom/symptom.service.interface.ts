import { Diagnostic, Symptom } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { DiagnosticSymptomUpdate } from "@/types/diagnostic.type";

export interface ISymptomService {
  getAll(): Promise<ApiResponse<Symptom[]>>;
  updateSymtoms(symptomUpdate: DiagnosticSymptomUpdate): Promise<ApiResponse<Diagnostic>>;
}
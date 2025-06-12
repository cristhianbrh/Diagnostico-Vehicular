import { Diagnostic } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { DiagnosticSolutionUpdate, DiagnosticUpdate, DiagnoticCreate } from "@/types/diagnostic.type";

export interface IDiagnosticService {
    create(data: DiagnoticCreate): Promise<ApiResponse<Diagnostic>>;
    getAll(): Promise<ApiResponse<Diagnostic[]>>;
    solutionDiagnostic(diagnosticSolution: DiagnosticSolutionUpdate): Promise<ApiResponse<Diagnostic>>;
    updateById(diagnosticUpdate: DiagnosticUpdate): Promise<ApiResponse<Diagnostic>>
}
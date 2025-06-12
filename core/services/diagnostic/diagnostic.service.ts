import { Diagnostic } from "@/generated/prisma";
import { parseError } from "@/lib/utils";
import { ApiResponse } from "@/types/custom-response.type";
import { DiagnosticSolutionUpdate, DiagnosticUpdate, DiagnoticCreate } from "@/types/diagnostic.type";
import { IDiagnosticService } from "./diagnostic.service.interface";
import axios from "axios";

export class DiagnosticService implements IDiagnosticService {

    public async create(data: DiagnoticCreate): Promise<ApiResponse<Diagnostic>> {
        try {
            const { data: response } = await axios.post<ApiResponse<Diagnostic>>(`${process.env.API_URL}/api/diagnostic/create`, data);
            return response;
        } catch (error: any) {
            return { error: parseError(error) };
        }
    }

    public async getAll(): Promise<ApiResponse<Diagnostic[]>> {
        try {
            const { data: response } = await axios.get<ApiResponse<Diagnostic[]>>(`${process.env.API_URL}/api/diagnostic/getAll`);
            return response;
        } catch (error: any) {
            return { error: parseError(error) };
        }
    }

    public async solutionDiagnostic(diagnosticSolution: DiagnosticSolutionUpdate ): Promise<ApiResponse<Diagnostic>> {
        try {
            const { data: response } = await axios.put<ApiResponse<Diagnostic>>(`${process.env.API_URL}/api/diagnostic/solutionDiagnostic`, diagnosticSolution);
            return response;
        } catch (error: any) {
            return { error: parseError(error) };
        }
    }

    public async updateById(diagnosticUpdate: DiagnosticUpdate): Promise<ApiResponse<Diagnostic>> {
        try {
            const { data: response } = await axios.put<ApiResponse<Diagnostic>>(
                `${process.env.API_URL}/api/diagnostic/updateById`, diagnosticUpdate
            );
            return response;
        } catch (error: any) {
            return { error: parseError(error) };
        }
    }
}
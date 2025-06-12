import { Symptom } from "@/generated/prisma";
import { parseError } from "@/lib/utils";
import { ApiResponse } from "@/types/custom-response.type";
import axios from "axios";
import { ISymptomService } from "./symptom.service.interface";

export class SymptomService implements ISymptomService {
    public async getAll(): Promise<ApiResponse<Symptom[]>> {
        try {
            const { data: response } = await axios.get<any>(`${process.env.API_URL}/api/symptoms/getAll`);
            return response;
        } catch (error: any) {
            return { error: parseError(error) };
        }
    }
}
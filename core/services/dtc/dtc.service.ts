import { ApiResponse } from "@/types/custom-response";
import { IDtcService } from "./dtc.service.interface";
import { Dtc } from "@/generated/prisma";
import axios from "axios";
import { parseError } from "@/lib/utils";

export class DtcService implements IDtcService {
    public async getAll(): Promise<ApiResponse<Dtc[]>> {
        try {
            const { data: response } = await axios.get<ApiResponse<Dtc[]>>(`${process.env.API_URL}/api/dtc/getAll`);
            return response;
        } catch (error) {
            return { error: parseError(error) };
        }
    }
}
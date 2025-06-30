import { Dtc } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { DtcSummary } from "@/types/dtc.type";

export interface IDtcService {
    getAll() : Promise<ApiResponse<DtcSummary[]>>;
}
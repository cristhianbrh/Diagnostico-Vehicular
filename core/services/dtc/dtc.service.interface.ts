import { Dtc } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";

export interface IDtcService {
    getAll() : Promise<ApiResponse<Dtc[]>>;
}
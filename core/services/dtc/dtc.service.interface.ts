import { Dtc } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response";

export interface IDtcService {
    getAll() : Promise<ApiResponse<Dtc[]>>;
}
import { ScannerFile } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";

export interface IScannerService {
    getAll(): Promise<ApiResponse<ScannerFile[]>>;
    upload(scannerResultPath: string): Promise<ApiResponse<number>>;
    removeById(id: number): Promise<ApiResponse<ScannerFile>>;
}
import { ApiResponse } from "@/types/custom-response.type";
import { IScannerService } from "./scanner.service.interface";
import { PrismaClient, ScannerFile } from "@/generated/prisma";
import { parseError } from "@/lib/utils";
import axios from "axios";
import path from 'path';
import { ScannerFileCreate } from "@/types/scanner.type";
import { JsonScannerReader } from "@/lib/scanner-reader/json-scanner-reader";
import { CsvScannerReader } from "@/lib/scanner-reader/csv-scanner-reader";

const prisma = new PrismaClient();

export class ScannerService {
    public async getAll(): Promise<ApiResponse<ScannerFile[]>> {
        try {
            const { data: response } = await axios.get<ApiResponse<ScannerFile[]>>(`${process.env.API_URL}/api/scanner/getAll`);
            return response;
        } catch (error) {
            return { error: parseError(error) };
        }
    }

    public async upload(scannerResultPath: string): Promise<ApiResponse<number>> {
        try {
            let scannerData : ScannerFileCreate | undefined;

            if(true) {
                scannerData = new JsonScannerReader(scannerResultPath).getScannerFileData();
            }

            // if(path.extname(scannerResultPath) === '.csv') {
            //     scannerData = new CsvScannerReader(scannerResultPath).getScannerFileData();
            // }

            if(scannerData === undefined) {
                throw new Error("No se pudo leer el archivo");
            }

            const { data: response } = await axios.post<ApiResponse<number>>(`${process.env.API_URL}/api/scanner/upload`, scannerData);
            return response;
        } catch (error) {
            return { error: parseError(error) };
        }
    }

    public async removeById(id: number): Promise<ApiResponse<ScannerFile>> {
        try {
            const response = await prisma.scannerFile.delete({ where: { id: id } });
            return { data: response, message: "Archivo eliminado correctamente" };
        } catch (error) {
            return { error: parseError(error) };
        }
    }
}
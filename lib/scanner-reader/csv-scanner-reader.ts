import { ScannerFileCreate } from "@/types/scanner.type";
import { IScannerReader } from "./internal/scanner-reader.interface";
import { parse as csvParse } from 'csv-parse/sync';
import path from "path";

export class CsvScannerReader extends IScannerReader {
    public parse(content: string) {
        return csvParse(content, {
            columns: true,
            skip_empty_lines: true,
        });
    }
    public getScannerFileData(): ScannerFileCreate {
        const raw = this.read();
        const firstRow = raw[0];

        return {
            fileName: path.basename(this.filePath),
            uploadDate: firstRow["scan_time"] || new Date(),
            vehicleVin: firstRow["vin"],
            scannerType: firstRow["scanner_manufacturer"],
            status: "processed",
            rawData: raw
        }
    }

}
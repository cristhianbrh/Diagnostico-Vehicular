import { ScannerFileCreate } from '@/types/scanner.type';
import { IScannerReader } from './internal/scanner-reader.interface';
import path from 'path';

export class JsonScannerReader extends IScannerReader {
  public parse(content: string) {
    const parsed = JSON.parse(content);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('El archivo JSON debe contener un objeto en la raíz');
    }
    return parsed;
  }

  public getScannerFileData(): ScannerFileCreate {
    const raw = this.read();
    return {
      fileName: path.basename(this.filePath),
      uploadDate: raw.scanner?.scan_time || new Date(),
      vehicleVin: raw.vehicle?.vin,
      scannerType: raw.scanner?.manufacturer,
      status: "processed",
      rawData: raw
    }
  }
}
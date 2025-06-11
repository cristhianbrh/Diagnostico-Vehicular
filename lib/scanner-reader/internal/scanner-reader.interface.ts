import path from "path";
import fs from 'fs';
import { ScannerFileCreate } from "@/types/scanner.type";

export abstract class IScannerReader {
  protected filePath: string;

  constructor(relativePath: string) {
    this.filePath = path.resolve(process.cwd(), relativePath);
  }

  protected read(): any {
    const raw = fs.readFileSync(this.filePath, 'utf-8');
    return this.parse(raw);
  }

  abstract parse(content: string): any;
  abstract getScannerFileData(): ScannerFileCreate;
}
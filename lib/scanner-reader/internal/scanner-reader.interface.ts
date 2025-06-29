import path from "path";
import { ScannerFileCreate } from "@/types/scanner.type";

export abstract class IScannerReader {
  protected filePath: string;

  constructor(relativePath: string) {
    this.filePath = path.resolve(process.cwd(), relativePath);
  }

  protected read(): any {
    // const raw = fs.readFileSync(this.filePath, 'utf-8');
    // return this.parse(raw);
  }

  abstract parse(content: string): any;
  abstract getScannerFileData(): ScannerFileCreate;
}




// import { ScannerFileCreate } from "@/types/scanner.type";

// export abstract class IScannerReader {
//   protected file: File;

//   constructor(file: File) {
//     this.file = file;
//   }

//   // Lee el archivo usando FileReader y retorna una promesa con el resultado parseado
//   async read(): Promise<any> {
//     const content = await this.readFileAsText(this.file);
//     return this.parse(content);
//   }

//   // Utilidad para leer el archivo como texto
//   protected readFileAsText(file: File): Promise<string> {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result as string);
//       reader.onerror = reject;
//       reader.readAsText(file);
//     });
//   }

//   abstract parse(content: string): any;
//   abstract getScannerFileData(): ScannerFileCreate;
// }
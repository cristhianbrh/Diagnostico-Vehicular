import { DiagnosticSymptom } from "@/generated/prisma";

export type SymptomsDiagnosticToUpload = {
    diagnosticId: number,
    symptoms: DiagnosticSymptom[],
    aditionalSymptom?: String | undefined | null,
    noteTecnic?: String | undefined | null,
}
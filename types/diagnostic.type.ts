import { Diagnostic, Dtc, Symptom } from "@/generated/prisma";

export type DiagnoticCreate = Pick<
    Diagnostic, "vehicleId" | "fecha" | "desc" | "tecnico" | "estado" | "detalles" | "cost" | "duration" | "scannerFileId"
> & Partial<Pick<Diagnostic, "id">> & { dtcCodes: string[] }

export type DiagnosticUpdate = Partial<Diagnostic> & { id: number }

export type DiagnosticSolutionUpdate = Pick<
    Diagnostic, "solutionText"
> & Partial<Pick<Diagnostic, "id">>

export type DiagnosticSymptomUpdate = {
    diagnosticId: number,
    symptomsIds: number[],
    aditionalSymptom?: string | null | undefined,
    noteTecnic?: string | null | undefined,
}
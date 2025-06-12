import { Diagnostic, ScannerFile, Vehicle } from "@/generated/prisma";

export type VehicleCreate = Pick<
    Vehicle, "marca" | "modelo" | "year" | "motor" | "vin" | "patente" | "km" | "userId"
> & Partial<Pick<Vehicle, "id" | "lastDiag">>

export type VehicleUpdate = Partial<VehicleCreate>;

export type VehicleSummary = Vehicle & {
    user: { id: number, name: string, email: string }
} & {
    diagnostics: Diagnostic[]
} & {
    scannerFiles: ScannerFile[]
};
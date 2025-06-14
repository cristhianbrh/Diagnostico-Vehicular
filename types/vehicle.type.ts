import {
  Diagnostic,
  DiagnosticDtc,
  Dtc,
  ScannerFile,
  Vehicle,
  Symptom,
  DiagnosticSymptom,
} from "@/generated/prisma";

export type VehicleCreate = Pick<
  Vehicle,
  "marca" | "modelo" | "year" | "motor" | "vin" | "patente" | "km" | "userId"
> &
  Partial<Pick<Vehicle, "id" | "lastDiag">>;

export type VehicleUpdate = Partial<VehicleCreate>;

export type VehicleSummary = Vehicle & {
  user: { id: number; name: string; email: string };
} & {
  diagnostics: Diagnostic[];
} & {
  scannerFiles: ScannerFile[];
};

export type VehicleDiagnosticDtcSummary = Vehicle & {
  user: { id: number; name: string; email: string };
} & {
  diagnostics: VehicleDiagnosticDtcSummary_diagnostic[];
} & {
  scannerFiles: ScannerFile[];
};

export type VehicleDiagnosticDtcSummary_diagnostic = Diagnostic & {
  symptoms: { symptom: Symptom & DiagnosticSymptom }[];
} & {
  dtcs: (Dtc & DiagnosticDtc)[];
};

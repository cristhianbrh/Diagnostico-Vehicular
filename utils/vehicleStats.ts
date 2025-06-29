import { VehicleDiagnosticDtcSummary } from "@/types/vehicle.type";

// DRY: Utilidad para calcular estadísticas de diagnósticos
export function getVehicleStats(
  diagnostics: VehicleDiagnosticDtcSummary["diagnostics"]
) {
  const totalDiags = diagnostics.length;
  const pendientes = diagnostics.filter((d) => d.estado === "pendiente").length;
  const resueltos = diagnostics.filter((d) => d.estado === "resuelto").length;
  const graves = diagnostics.filter((d) => d.estado === "grave").length;
  return { totalDiags, pendientes, resueltos, graves };
}

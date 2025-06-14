import { AppStatus } from "@/types/app-status.type";
import { VehicleSummary } from "@/types/vehicle.type";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

// Utilidad para calcular el estado de un vehículo
export function getVehicleStatus(vehicle: VehicleSummary): AppStatus {
  if (!vehicle.diagnostics || vehicle.diagnostics.length === 0) {
    return { status: "sin-diagnosticos", color: "gray", icon: Clock };
  }
  const diags = [...vehicle.diagnostics].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
  const lastDiag = diags[0];
  switch (lastDiag.estado) {
    case "grave":
      return { status: "grave", color: "red", icon: AlertTriangle };
    case "pendiente":
      return { status: "pendiente", color: "yellow", icon: Clock };
    case "resuelto":
      return { status: "ok", color: "green", icon: CheckCircle };
    default:
      return { status: "desconocido", color: "gray", icon: Clock };
  }
}

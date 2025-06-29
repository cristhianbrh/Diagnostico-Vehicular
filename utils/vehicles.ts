import { AppStatus } from "@/types/app-status.type";
import { IVehicleFormCreate } from "@/types/IVehicleFormCreate";
import {
  VehicleDiagnosticDtcSummary,
  VehicleSummary,
} from "@/types/vehicle.type";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

// Utilidad para calcular el estado de un vehículo
export function getVehicleStatus(state?: string): AppStatus {
  if (!state) {
    return { status: "sin-diagnosticos", color: "gray", icon: Clock };
  }

  switch (state) {
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

// DRY: Función reutilizable para validar el formulario de vehículo
export function validateVehicleForm(vehicleForm: IVehicleFormCreate) {
  const errors: Record<string, string> = {};
  if (!vehicleForm.marca || vehicleForm.marca.length < 2)
    errors.marca = "Marca requerida";
  if (!vehicleForm.modelo) errors.modelo = "Modelo requerido";
  if (
    !vehicleForm.year ||
    vehicleForm.year < 1900 ||
    vehicleForm.year > new Date().getFullYear() + 1
  )
    errors.year = "year inválido";
  if (!vehicleForm.motor) errors.motor = "Tipo de motor requerido";
  if (!vehicleForm.vin || vehicleForm.vin.length !== 17)
    errors.vin = "VIN debe tener 17 caracteres";
  if (!vehicleForm.patente) errors.patente = "Patente requerida";
  if (!vehicleForm.km || vehicleForm.km < 0) errors.km = "Kilometraje inválido";
  if (!vehicleForm.userId) errors.userId = "Usuario requerido";
  return errors;
}

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

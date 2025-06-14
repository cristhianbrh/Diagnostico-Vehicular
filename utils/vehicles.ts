import { AppStatus } from "@/types/app-status.type";
import { IVehicleFormCreate } from "@/types/IVehicleFormCreate";
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

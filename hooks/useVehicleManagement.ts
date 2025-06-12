import { VehicleService } from "@/core/services/vehicle/vehicle.service";
import { Vehicle } from "@/generated/prisma";
import { AppStatus } from "@/types/app-status.type";
import { VehicleSummary } from "@/types/vehicle.type";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function useVehicleManagementTable() {
  const vehicleService = new VehicleService();
  const [vehicles, setVehicles] = useState<VehicleSummary[]>([]);

  const [errors, setErrors] = useState({});

  const getAllVehicle = async () => {
    const { data: vehicles, error } = await vehicleService.getAll();
    console.log(vehicles);
    console.log(error);
    try {
      setVehicles(vehicles || []);
    } catch (catchError) {
      setErrors({ vehicle: error });
    }
  };
  function getVehicleStatus(vehicle: VehicleSummary): AppStatus {
    console.log("Vehicle");
    console.log(vehicle);
    const diags = vehicle.diagnostics.sort(
      (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );

    console.log("diags");
    console.log(diags);
    if (diags.length === 0)
      return { status: "sin-diagnosticos", color: "gray", icon: Clock };

    const lastDiag = diags[0];
    if (lastDiag.estado === "grave")
      return { status: "grave", color: "red", icon: AlertTriangle };
    if (lastDiag.estado === "pendiente")
      return { status: "pendiente", color: "yellow", icon: Clock };
    if (lastDiag.estado === "resuelto")
      return { status: "ok", color: "green", icon: CheckCircle };

    return { status: "desconocido", color: "gray", icon: Clock };
  }

  useEffect(() => {
    getAllVehicle();
  }, []);

  return {
    vehicles,
    errors,
    getVehicleStatus,
  };
}

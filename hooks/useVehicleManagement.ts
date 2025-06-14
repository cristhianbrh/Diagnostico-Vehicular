import { VehicleService } from "@/core/services/vehicle/vehicle.service";
import { VehicleSummary } from "@/types/vehicle.type";
import { useEffect, useState, useCallback } from "react";

export function useVehicleManagementTable() {
  const vehicleService = new VehicleService();
  const [vehicles, setVehicles] = useState<VehicleSummary[]>([]);
  const [errors, setErrors] = useState<Record<string, unknown>>({});

  const getAllVehicle = useCallback(async () => {
    try {
      const { data, error } = await vehicleService.getAll();
      if (error) throw error;
      setVehicles(data || []);
    } catch (error) {
      setErrors((prev) => ({ ...prev, vehicle: error }));
    }
  }, [vehicleService]);

  useEffect(() => {
    getAllVehicle();
  }, [getAllVehicle]);

  return {
    vehicles,
    errors,
  };
}

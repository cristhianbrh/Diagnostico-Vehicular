import { VehicleService } from "@/core/services/vehicle/vehicle.service";
import { VehicleForTableSummary } from "@/types/vehicle.type";
import { useEffect, useState, useCallback } from "react";

export function useVehicleManagementTable() {
  const vehicleService = new VehicleService();
  const [vehicles, setVehicles] = useState<VehicleForTableSummary[]>([]);
  const [errors, setErrors] = useState<Record<string, unknown>>({});

  const getAllVehicle = useCallback(async () => {
    try {
      const { data, error } = await vehicleService.getAllForTable();
      if (error) throw error;
      setVehicles(data || []);
    } catch (error) {
      setErrors((prev) => ({ ...prev, vehicle: error }));
    }
  }, [vehicleService]);

  useEffect(() => {
    getAllVehicle();
  }, []);

  return {
    vehicles,
    errors,
  };
}

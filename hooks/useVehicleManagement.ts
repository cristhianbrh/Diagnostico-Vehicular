import { container } from "@/core/di";
import { IVehicleService } from "@/core/services/vehicle/vehicle.service.interface";
import { VehicleForTableSummary } from "@/types/vehicle.type";
import { useEffect, useState, useCallback, useMemo } from "react";

export function useVehicleManagementTable() {
  const vehicleService = useMemo(() => container.resolve<IVehicleService>("IVehicleService"), []);
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

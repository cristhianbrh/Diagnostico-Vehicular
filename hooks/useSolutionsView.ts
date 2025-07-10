import { container } from "@/core/di";
import { IDiagnosticService } from "@/core/services/diagnostic/diagnostic.service.interface";
import { IVehicleService } from "@/core/services/vehicle/vehicle.service.interface";
import {
  Diagnostic,
  DiagnosticDtc,
  DiagnosticSymptom,
  Dtc,
  Symptom,
} from "@/generated/prisma";
import { VehicleSummary } from "@/types/vehicle.type";
import { useEffect, useMemo, useState } from "react";

export function useSolutionsView() {
  const [vehicleSelectSymtoms, setVehicleSelectSymtoms] = useState<number>(-1);
  const [diagnosticSelectSolutions, setDiagnosticSelectSolutions] =
    useState<number>(-1);
  const [vehiclesData, setVehiclesData] = useState<VehicleSummary[]>([]);
  const [diagnostics, setDiagnostics] = useState<
    (Diagnostic & { dtcs: DiagnosticDtc[] } & {
      symptoms: (DiagnosticSymptom  & { symptom: Symptom } )[];
    })[]
  >([]);
  const [errors, setErrors] = useState<{ dtc?: string }>({});

  const vehicleService = useMemo(() => container.resolve<IVehicleService>("IVehicleService"), []);
  const diagnosticService = useMemo(() => container.resolve<IDiagnosticService>("IDiagnosticService"), []);

  const getAllVehicles = async () => {
    const { data, error } = await vehicleService.getAll();
    if (data) {
      setVehiclesData(data);
    }
  };

  const getAllDiagnostics = async () => {
    try {
      const { data } = await diagnosticService.getAllData();
      if (data) {
        setDiagnostics(data || []);
      }
    } catch (error) {
      setErrors({ dtc: "Error al obtener base de datos de diagnostico" });
    }
  };

  useEffect(() => {
    getAllVehicles();
    getAllDiagnostics();
  }, []);
  return {
    vehicleSelectSymtoms,
    setVehicleSelectSymtoms,
    diagnosticSelectSolutions,
    setDiagnosticSelectSolutions,
    vehiclesData,
    diagnostics,
  };
}

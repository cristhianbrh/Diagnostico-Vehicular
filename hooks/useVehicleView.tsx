import "reflect-metadata";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { VehicleDiagnosticDtcSummary } from "@/types/vehicle.type";
import { getVehicleStats } from "@/utils/vehicleStats"; // Importación directa y robusta
import { container } from "@/core/di";
import { IVehicleService } from "@/core/services/vehicle/vehicle.service.interface";

export function useVehicleView(idVehicle: number) {
  // SRP: Cada servicio tiene una única responsabilidad
  const vehicleService = useMemo(() => container.resolve<IVehicleService>("IVehicleService"), []);
  const router = useRouter();
  const [vehicleCurrent, setVehicleCurrent] = useState<
    VehicleDiagnosticDtcSummary | undefined
  >();
  const [errors, setErrors] = useState<{ solve?: string }>({});
  const [loading, setLoading] = useState<boolean>(false);

  // SRP/DRY: Separar la obtención del vehículo actual
  const getVehicleCurrent = useCallback(async () => {
    const { data, error } = await vehicleService.getTotalById(idVehicle);
    if (data) {
      setVehicleCurrent(data);
    } else {
      router.push("/vehicles");
    }
  }, [idVehicle, router, vehicleService]);

  // OCP: Permite extender el manejo de solución de diagnósticos
  const handleSubmitForm = useCallback(
    async (e: React.SyntheticEvent, id: number) => {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target as HTMLFormElement);
      const detalles = formData.get("detalles") as string;
      try {
        await axios.put("/api/diagnostic/solutionDiagnostic", {
          id: id,
          solutionText: detalles,
        });
        setVehicleCurrent((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            diagnostics: prev.diagnostics.map((pre_diag) =>
              pre_diag.id === id
                ? {
                    ...pre_diag,
                    detalles: detalles,
                    estado: "resuelto",
                  }
                : pre_diag
            ),
          };
        });
        setErrors({});
      } catch (error) {
        setErrors({
          solve: "Error al marcar como resuelto",
        });
      }
      setLoading(false);
    },
    []
  );

  // SRP: Efecto para cargar el vehículo al montar
  useEffect(() => {
    getVehicleCurrent();
  }, [getVehicleCurrent]);

  return {
    vehicleCurrent,
    getVehicleStats: () => getVehicleStats(vehicleCurrent?.diagnostics || []), // DRY: reutiliza la utilidad
    loading,
    setLoading,
    handleSubmitForm,
    errors,
  };
}

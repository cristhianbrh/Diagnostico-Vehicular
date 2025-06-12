import "reflect-metadata";
import { UserService } from "@/core/services/user/user.service";
import { VehicleService } from "@/core/services/vehicle/vehicle.service";
import { User, Vehicle } from "@/generated/prisma";
import { AppStatus } from "@/types/app-status.type";
import { IVehicleFormCreate } from "@/types/IVehicleFormCreate";
import { UserSummary } from "@/types/user.type";
import axios from "axios";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { VehicleDiagnosticDtcSummary } from "@/types/vehicle.type";

export function useVehicleView(idVehicle: number) {
  const vehicleService = new VehicleService();
  const router = useRouter();
  const [vehicleCurrent, setVehicleCurrent] = useState<
    VehicleDiagnosticDtcSummary | undefined
  >();
  const [errors, setErrors] = useState<{ solve?: string }>({});

  const [loading, setLoading] = useState<boolean>(false);

  const getVehicleCurrent = async () => {
    const { data, error } = await vehicleService.getTotalById(idVehicle);
    if (data) {
      console.log(data);
      setVehicleCurrent(data);
    } else {
      router.push("/vehicles");
    }
  };

  const getVehicleStats = () => {
    const diags = vehicleCurrent?.diagnostics || [];

    const totalDiags = diags.length;
    const pendientes = diags.filter((d) => d.estado === "pendiente").length;
    const resueltos = diags.filter((d) => d.estado === "resuelto").length;
    const graves = diags.filter((d) => d.estado === "grave").length;

    return { totalDiags, pendientes, resueltos, graves };
  };

  const handleSubmitForm = async (e: React.SyntheticEvent, id: number) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const detalles = formData.get("detalles") as string;
    try {
      // Llama a la API para actualizar el diagnóstico
      const res = await axios.put("/api/diagnostic/solutionDiagnostic", {
        id: id,
        solutionText: detalles,
      });
      //   // Actualiza el estado localmente con la respuesta de la API
      //   setDiagnostics((prev) =>
      //     prev.map((d) => (d.id === id ? { ...d, ...res.data.diagnostic } : d))
      //   );
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
  };

  useState(() => {
    getVehicleCurrent();
  });
  return {
    vehicleCurrent,
    getVehicleStats,
    loading,
    setLoading,
    handleSubmitForm,
    errors,
  };
}

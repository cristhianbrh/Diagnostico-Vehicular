import "reflect-metadata";
import { UserService } from "@/core/services/user/user.service";
import { IVehicleFormCreate } from "@/types/IVehicleFormCreate";
import { UserSummary } from "@/types/user.type";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { validateVehicleForm } from "@/utils/vehicles";

export function useVehicleCreateForm() {
  // SRP: Cada servicio tiene una única responsabilidad
  const userService = new UserService();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserSummary[]>([]);
  const [vehicleForm, setVehicleForm] = useState<IVehicleFormCreate>({
    marca: "",
    modelo: "",
    year: 0,
    motor: "",
    vin: "",
    patente: "",
    km: 0,
    userId: 0,
    fechaAdq: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // SRP/DRY: Separar la lógica de validación y envío
  const handleSubmitForm = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setLoading(true);
      const validationErrors = validateVehicleForm(vehicleForm); // DRY
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        try {
          await axios.post("/api/vehicle/create", vehicleForm);
          router.push("/vehicles");
        } catch (error) {
          // OCP: Manejo de errores extensible
          if (axios.isAxiosError(error)) {
            setErrors({
              api:
                error.response?.data?.error ||
                error.message ||
                "Error al crear vehículo",
            });
          } else if (error instanceof Error) {
            setErrors({ api: error.message });
          } else {
            setErrors({ api: "Error al crear vehículo" });
          }
          setLoading(false);
          return;
        }
      } else {
        setLoading(false);
        return;
      }
      setTimeout(() => setLoading(false), 500);
    },
    [vehicleForm, router]
  );

  // SRP: Obtener usuarios en un efecto separado
  useEffect(() => {
    const getAllUsers = async () => {
      const { data, error } = await userService.getAllUsers();
      if (!error) {
        setUsers(data as UserSummary[]);
      }
    };
    getAllUsers();
  }, [userService]);

  return {
    handleSubmitForm,
    setVehicleForm,
    vehicleForm,
    errors,
    users,
    loading,
  };
}

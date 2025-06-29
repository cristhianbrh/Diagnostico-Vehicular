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
import { VehicleSummary } from "@/types/vehicle.type";

export function useVehicleModifyForm(idVehicle: number) {
  const vehicleService = new VehicleService();
  const router = useRouter();
  const userService = new UserService();

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
  const [errors, setErrors] = useState<{
    marca?: string;
    modelo?: string;
    year?: string;
    motor?: string;
    vin?: string;
    patente?: string;
    km?: string;
    api?: string;
    userId?: string;
  }>({});

  const handleSubmitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!vehicleForm.marca || vehicleForm.marca.length < 2)
      setErrors((prev) => ({ ...prev, marca: "Marca requerida" }));
    if (!vehicleForm.modelo)
      setErrors((prev) => ({ ...prev, modelo: "Modelo requerido" }));
    if (
      !vehicleForm.year ||
      vehicleForm.year < 1900 ||
      vehicleForm.year > new Date().getFullYear() + 1
    )
      setErrors((prev) => ({ ...prev, year: "year inválido" }));
    if (!vehicleForm.motor)
      setErrors((prev) => ({ ...prev, motor: "Tipo de motor requerido" }));
    if (!vehicleForm.vin || vehicleForm.vin.length !== 17)
      setErrors((prev) => ({ ...prev, vin: "VIN debe tener 17 caracteres" }));
    if (!vehicleForm.patente)
      setErrors((prev) => ({ ...prev, patente: "Patente requerida" }));
    if (!vehicleForm.km || vehicleForm.km < 0)
      setErrors((prev) => ({ ...prev, km: "Kilometraje inválido" }));
    if (!vehicleForm.userId)
      setErrors((prev) => ({ ...prev, userId: "Usuario requerido" }));

    if (Object.keys(errors).length === 0) {
      try {
        const { data, error } = await vehicleService.updateById({
          ...vehicleForm,
          id: idVehicle,
        });
        if (error) throw Error("Upps, ha ocurrido un error");
        router.push("/vehicles");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrors({
            api:
              error.response?.data?.error ||
              error.message ||
              "Error al actualizar vehículo",
          });
        } else if (error instanceof Error) {
          setErrors({ api: error.message });
        } else {
          setErrors({ api: "Error al actualizar vehículo" });
        }
        setLoading(false);
        return;
      }
    }

    setTimeout(() => setLoading(false), 500);
  };

  const getVehicleCurrent = async () => {
    const { data, error } = await vehicleService.getById(idVehicle);
    if (data) {
      setVehicleForm({
        marca: data.marca,
        modelo: data.modelo,
        year: data.year,
        motor: data.motor,
        vin: data.vin,
        patente: data.patente,
        km: data.km,
        userId: data.userId,
        fechaAdq: data.fechaAdq
          ? new Date(data.fechaAdq).toISOString().split("T")[0]
          : "",
      });
    } else {
      router.push("/vehicles");
    }
  };
  const getAllUsers = async () => {
    const { data, error } = await userService.getAllUsers();
    if (!error) {
      setUsers(data as UserSummary[]);
    }
  };
  useState(() => {
    getAllUsers();
    getVehicleCurrent();
  });
  return {
    handleSubmitForm,
    setVehicleForm,
    vehicleForm,
    errors,
    users,
    loading,
  };
}

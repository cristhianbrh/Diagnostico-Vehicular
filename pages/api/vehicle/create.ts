import { PrismaClient } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response";
import { VehicleCreate } from "@/types/vehicle";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<VehicleCreate>>
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { marca, modelo, year, motor, vin, patente, km, userId } : VehicleCreate = req.body;

  const errors: Partial<Record<keyof VehicleCreate, string>> = {};

  if (!marca || marca.length < 2) errors.marca = "Marca requerida";
  // if (!modelo) errors.modelo = "Modelo requerido";
  if (!year || year < 1900 || year > new Date().getFullYear() + 1)
    errors.year = "Año inválido";
  // if (!motor) errors.motor = "Tipo de motor requerido";
  if (!vin || vin.length !== 17) errors.vin = "VIN debe tener 17 caracteres";
  // if (!patente) errors.patente = "Patente requerida";
  if (km === undefined || km < 0) errors.km = "Kilometraje inválido";
  // if (!userId) errors.userId = "Usuario requerido";

  if (Object.keys(errors).length > 0) {
    res.status(400).json({ error: "Datos inválidos", fields: errors });
    return;
  }

  try {
    const newVehicle = await prisma.vehicle.create({
      data: {
        marca,
        modelo,
        year,
        motor,
        vin,
        patente,
        km,
        userId,
        fechaAdq: new Date(),
        lastDiag: null,
      },
    });
    res.status(201).json({data: newVehicle});
  } catch (error: any) {
    res.status(500).json({ error: "Error al crear vehículo" });
  }
}

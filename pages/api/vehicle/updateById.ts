import { PrismaClient } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response";
import { VehicleCreate, VehicleUpdate } from "@/types/vehicle";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<VehicleCreate>>
) {
  if (req.method !== "PUT") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { id, marca, modelo, year, motor, vin, patente, km, userId, lastDiag } : VehicleUpdate = req.body;

  const errors: Record<string, string> = {};
  if (!id) errors.id = "ID requerido";
  if (marca && marca.length < 2) errors.marca = "Marca requerida";
  // if (!modelo) errors.modelo = "Modelo requerido";
  if (year && (year < 1900 || year > new Date().getFullYear() + 1)) errors.year = "Año inválido";
  // if (!motor) errors.motor = "Tipo de motor requerido";
  if (vin && vin.length !== 17) errors.vin = "VIN debe tener 17 caracteres";
  // if (!patente) errors.patente = "Patente requerida";
  if (km && (km === undefined || km < 0)) errors.km = "Kilometraje inválido";
  // if (!userId) errors.userId = "Usuario requerido";

  if (Object.keys(errors).length > 0) {
    res.status(400).json({ error: "Datos inválidos", fields: errors });
    return;
  }

  try {
    const updated = await prisma.vehicle.update({
      where: { id: Number(id) },
      data: {
        marca,
        modelo,
        year,
        motor,
        vin,
        patente,
        km,
        userId,
        lastDiag: lastDiag ? new Date(lastDiag) : null,
      },
    });
    res.status(200).json({data: updated});
  } catch (error: any) {
    res.status(500).json({ error: "Error al actualizar vehículo" });
  }
}

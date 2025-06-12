import { PrismaClient, Vehicle } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { VehicleSummary } from "@/types/vehicle.type";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<VehicleSummary>>
) {
  if (req.method !== "GET") return res.status(405).end();

  const id = req.query.id ? Number(req.query.id) : undefined;
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "ID de vehículo inválido" });
  }

  try {
    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true } },
        diagnostics: true,
        scannerFiles: true,
      },
    });
    if (!vehicle) {
      return res.status(404).json({ error: "Vehículo no encontrado" });
    }
    res.status(200).json({ data: vehicle });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener vehículo" });
  }
}

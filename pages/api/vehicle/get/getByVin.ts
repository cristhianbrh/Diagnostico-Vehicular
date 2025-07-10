import { PrismaClient, Vehicle } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { VehicleSummary } from "@/types/vehicle.type";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: any
) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    const vin = req.query.vin ? req.query.vin.toString() : undefined;
    if (!vin) {
      return res.status(400).json({ error: "ID de vehículo inválido" });
    }

    const vehicle = await prisma.vehicle.findUnique({
      where: { vin: vin },
      select: {
        id: true,
        diagnostics: {
          orderBy: { fecha: "desc" },
          select: {
            dtcs: {
              include: {
                dtc: true,
              },
            },
          },
        },
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

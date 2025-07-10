import { PrismaClient, Vehicle } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { VehicleForTableSummary } from "@/types/vehicle.type";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<VehicleForTableSummary[]>>
) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    const vehicles = await prisma.vehicle.findMany({
      select: {
        id: true,
        marca: true,
        modelo: true,
        year: true,
        lastDiag: true,
        patente: true,
        user: { select: { name: true } },
        diagnostics: {
          orderBy: { fecha: "desc" },
          take: 1,
        },
      },
    });
    res.status(200).json({
      data: vehicles.map((vehicle) => ({
        ...vehicle,
        status:
          vehicle.diagnostics.length > 0
            ? vehicle.diagnostics[0].estado
            : undefined,
      })),
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener vehículos" });
  }
}

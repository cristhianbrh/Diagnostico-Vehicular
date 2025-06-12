import { PrismaClient, Vehicle } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { VehicleSummary } from "@/types/vehicle.type";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<VehicleSummary[]>>
) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    const vehicles = await prisma.vehicle.findMany({
      include: {
        user: { select: { id: true, name: true, email: true } },
        diagnostics: true,
        scannerFiles: true,
      },
    });
    res.status(200).json({ data: vehicles });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener vehículos" });
  }
}

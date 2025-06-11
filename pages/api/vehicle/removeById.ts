import { PrismaClient, Vehicle } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Vehicle>>
) {
  if (req.method !== "DELETE") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { id } = req.query;
  const vehicleId = Number(id);
  if (!vehicleId || isNaN(vehicleId)) {
    res.status(400).json({ error: "ID inválido" });
    return;
  }

  try {
    const deleted = await prisma.vehicle.delete({ where: { id: vehicleId } });
    res.status(200).json({ message: "Vehículo eliminado", data: deleted });
  } catch (error: any) {
    res.status(404).json({ error: "Vehículo no encontrado" });
  }
}

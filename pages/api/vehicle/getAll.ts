import { PrismaClient } from "@/generated/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
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
    res.status(200).json({ vehicles });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener vehículos" });
  }
}

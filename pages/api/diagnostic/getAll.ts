import { PrismaClient } from "@/generated/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  try {
    const diagnostics = await prisma.diagnostic.findMany({
      include: {
        vehicle: true,
        scannerFile: true,
      },
      orderBy: { fecha: "desc" },
    });
    res.status(200).json({ diagnostics });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener diagnósticos" });
  }
}

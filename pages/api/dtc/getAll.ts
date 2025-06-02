import { PrismaClient } from "@/generated/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  try {
    const dtcs = await prisma.dtc.findMany();
    res.status(200).json({ dtcs });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener DTCs" });
  }
}

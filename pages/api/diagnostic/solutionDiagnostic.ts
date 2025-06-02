import { PrismaClient } from "@/generated/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  try {
    const { id, solutionText } = req.body;
    if (!id) {
      return res.status(400).json({ error: "ID de diagnóstico requerido" });
    }
    const updated = await prisma.diagnostic.update({
      where: { id: Number(id) },
      data: {
        estado: "resuelto"
      } 
    });
    
    

    res.status(200).json({ diagnostic: updated });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar diagnóstico" });
  }
}

import { Diagnostic, PrismaClient } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { DiagnosticSolutionUpdate } from "@/types/diagnostic.type";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Diagnostic>>
) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  try {
    const { id, solutionText } : DiagnosticSolutionUpdate = req.body;
    if (!id) {
      return res.status(400).json({ error: "ID de diagnóstico requerido" });
    }
    const updated = await prisma.diagnostic.update({
      where: { id: Number(id) },
      data: {
        estado: "resuelto",
        solutionText: solutionText,
      },
    });

    res.status(200).json({ data: updated });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar diagnóstico" });
  }
}

import { PrismaClient } from "@/generated/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  try {
    const {
      diagnosticId,
      symptoms,
      aditionalSymptom,
      noteTecnic
    } = req.body;

    const data = await prisma.diagnostic.update({
      where: { id: diagnosticId },
      data: {
        aditionalSymptom: aditionalSymptom,
        noteTecnicSym: noteTecnic
      },
    });

    // Asociar symptoms al diagnóstico
    if (Array.isArray(symptoms) && symptoms.length > 0) {
      const validSymtoms = await prisma.symptom.findMany({
        where: { id: { in: symptoms } },
        select: { id: true },
      });
      const validIds = validSymtoms.map((d) => d.id);
      // Crear las relaciones en DiagnosticDtc
      await Promise.all(
        validIds.map((id) =>
          prisma.diagnosticSymptom.create({
            data: {
              diagnosticId,
              symptomId: id
            },
          })
        )
      );
    }

    res.status(201).json({ data });
  } catch (error) {
    console.error("Error creating diagnostic:", error);
    res.status(500).json({ error: "Error al crear diagnóstico" });
  }
}

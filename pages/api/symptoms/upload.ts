import { Diagnostic, PrismaClient } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { DiagnosticSymptomUpdate } from "@/types/diagnostic.type";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Diagnostic>>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  try {
    const {
      diagnosticId,
      symptomsIds,
      aditionalSymptom,
      noteTecnic
    }: DiagnosticSymptomUpdate = req.body;

    // Asociar symptoms al diagnóstico
    let validIds: number[] = [];
    
    if (Array.isArray(symptomsIds) && symptomsIds.length > 0) {
      const validSymtoms = await prisma.symptom.findMany({
        where: { id: { in: symptomsIds } },
        select: { id: true },
      });

      validIds = validSymtoms.map((d) => d.id);
  
      await prisma.diagnosticSymptom.deleteMany({
        where: { diagnosticId: diagnosticId },
      });

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

    const data = await prisma.diagnostic.update({
      where: { id: diagnosticId },
      data: {
        aditionalSymptom: aditionalSymptom,
        noteTecnicSym: noteTecnic
      },
    });

    res.status(201).json({ data });
  } catch (error) {
    console.error("Error creating diagnostic:", error);
    res.status(500).json({ error: "Error al crear diagnóstico" });
  }
}

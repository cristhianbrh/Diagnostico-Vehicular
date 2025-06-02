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
      vehicleId,
      fecha,
      dtc,
      desc,
      tecnico,
      estado,
      detalles,
      scannerFile,
      cost,
      duration,
      scannerFileId,
    } = req.body;

    // if (!vehicleId || !fecha || !dtc || !desc || !tecnico || !estado) {
    //   return res.status(400).json({ error: "Faltan campos obligatorios" });
    // }

    const diagnostic = await prisma.diagnostic.create({
      data: {
        vehicleId,
        fecha,
        desc,
        tecnico,
        estado,
        detalles,
        cost,
        duration,
        scannerFileId,
      },
    });

    // Asociar DTCs al diagnóstico
    if (Array.isArray(dtc) && dtc.length > 0) {
      const dtcCodes = dtc.map((code) => code.toUpperCase());
      const validDtcs = await prisma.dtc.findMany({
        where: { code: { in: dtcCodes } },
        select: { code: true },
      });
      const validCodes = validDtcs.map((d) => d.code);
      // Crear las relaciones en DiagnosticDtc
      await Promise.all(
        validCodes.map((code) =>
          prisma.diagnosticDtc.create({
            data: {
              diagnosticId: diagnostic.id,
              dtcCode: code,
            },
          })
        )
      );
    }

    res.status(201).json({ diagnostic });
  } catch (error) {
    console.error("Error creating diagnostic:", error);
    res.status(500).json({ error: "Error al crear diagnóstico" });
  }
}

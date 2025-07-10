import { Diagnostic, PrismaClient } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { DiagnoticCreate } from "@/types/diagnostic.type";
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
      vehicleId,
      fecha,
      dtcCodes,
      desc,
      tecnico,
      estado,
      detalles,
      cost,
      duration,
      scannerFileId,
    }: DiagnoticCreate = req.body;

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
      include: {
        vehicle: true,
        scannerFile: true,
        dtcs: true,
        symptoms: true,
      },
    });

    // Asociar DTCs al diagnóstico
    if (Array.isArray(dtcCodes) && dtcCodes.length > 0) {
      const dtcCodesUpperCase = dtcCodes.map((code) => code.toUpperCase());

      const validDtcs = await prisma.dtc.findMany({
        where: { code: { in: dtcCodesUpperCase } },
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

    res.status(201).json({ data: diagnostic });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear diagnóstico" });
  }
}

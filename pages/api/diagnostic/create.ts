import { PrismaClient } from "@/generated/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  try {
    const {
      vehicleId,
      fecha,
      dtcs: dtc,
      desc,
      tecnico,
      estado,
      detalles,
      scannerFile,
      symptoms,
      cost,
      duration,
      userId
    } = req.body;

    if (!vehicleId || !fecha || !dtc || !desc || !tecnico || !estado) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const diagnostic = await prisma.diagnostic.create({
      data: {
        vehicleId,
        fecha,
        dtcs: dtc,
        desc,
        tecnico,
        estado,
        detalles,
        scannerFile,
        symptoms,
        cost,
        duration
      },
    });
    res.status(201).json({ diagnostic });
  } catch (error) {
    res.status(500).json({ error: "Error al crear diagnóstico" });
  }
}

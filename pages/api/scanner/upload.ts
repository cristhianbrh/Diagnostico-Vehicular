import { PrismaClient } from "@/generated/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { fileName, uploadDate, vehicleVin, scannerType, dtcCodes, status, rawData } = req.body;

  console.log("Received data:", req.body)
  try {
    const scannerFile = await prisma.scannerFile.create({
      data: {
        fileName,
        uploadDate: new Date(uploadDate),
        vehicleVin,
        scannerType,
        status,
        rawData,
      },
    });
    res.status(201).json(scannerFile);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar archivo de escáner" });
  }
}

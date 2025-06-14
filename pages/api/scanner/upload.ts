import { PrismaClient } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { ScannerFileCreate } from "@/types/scanner.type";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<number>>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const {
    fileName,
    uploadDate,
    vehicleVin,
    scannerType,
    status,
    rawData,
  }: ScannerFileCreate = req.body;

  console.log("Received data:", req.body);
  try {
    console.log({
      fileName,
      uploadDate,
      vehicleVin,
      scannerType,
      status,
      rawData,
    });
    
    const scannerFile = await prisma.scannerFile.create({
      data: {
        fileName,
        uploadDate,
        vehicleVin,
        scannerType,
        status,
        rawData,
      },
    });
    res.status(201).json({ data: scannerFile.id });
  } catch (error) {
    console.log("Error saving scanner file:", error);
    res.status(500).json({ error: "Error al guardar archivo de escáner" });
  }
}

import { PrismaClient, ScannerFile } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse<ScannerFile[]>>) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const scannerFiles = await prisma.scannerFile.findMany();
    res.status(200).json({ data: scannerFiles });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener archivos de escáner" });
  }
}

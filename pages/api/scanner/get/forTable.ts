import { PrismaClient } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { ScannerFileListForTable } from "@/types/scanner.type";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<ScannerFileListForTable[]>>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const scannerFiles = await prisma.scannerFile.findMany({
      select: {
        fileName: true,
        uploadDate: true,
        scannerType: true,
        vehicleVin: true,
        diagnostics: {
          select: {
            dtcs: {
              select: {
                dtcCode: true,
              },
            },
          },
        },
        status: true,
      },
    });
    res.status(200).json({
      data: scannerFiles.map(({ diagnostics, ...file }) => ({
        ...file,
        dtcs: diagnostics.flatMap((d) => d.dtcs.map((dt) => dt.dtcCode)),
      })),
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener archivos de escáner" });
  }
}

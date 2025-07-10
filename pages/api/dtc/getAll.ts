import { Dtc, PrismaClient } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { DtcSummary } from "@/types/dtc.type";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<DtcSummary[]>>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  try {
    const dtcs = await prisma.dtc.findMany({
      include: { causes: true, solutions: true },
    });
    res.status(200).json({ data: dtcs });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener DTCs" });
  }
}

import { PrismaClient, Symptom } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Symptom[]>>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }
  try {
    const symptoms = await prisma.symptom.findMany();

    res.status(200).json({ data: symptoms });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener diagnósticos" });
  }
}

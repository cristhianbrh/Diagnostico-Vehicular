import { PrismaClient } from "@/generated/prisma";
import { UserSummaryEdit } from "@/types/user";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PUT") {
        return res.status(405).json({ error: "Método no permitido" });
    }
    try {
        const { id, ...data } : { id: number } & UserSummaryEdit = req.body;
        if (!id) {
            return res.status(400).json({ error: "ID de usuario requerido" });
        }
        const updated = await prisma.user.update({
            where: { id: Number(id) },
            data,
        });
        res.status(200).json({ user: updated });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar usuario" });
    }
}

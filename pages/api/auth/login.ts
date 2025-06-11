import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@/generated/prisma";
import { UserResponse } from "@/types/user.type";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>
) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.active) {
      return res.status(401).json({ error: "Usuario no encontrado o inactivo" });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
    // Generar JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name, role: user.role },
      process.env.JWT_SECRET || "devsecret",
      { expiresIn: "7d" }
    );
    res.status(200).json({
      message: "Login exitoso",
      data: { id: user.id, email: user.email, name: user.name, role: user.role },
      token: token
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
}

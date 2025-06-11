import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { UserResponse } from "@/types/user.type";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>
) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password, name, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name, role: user.role },
      process.env.JWT_SECRET || "devsecret",
      { expiresIn: "7d" }
    );
    res.status(201).json({
      message: "Login exitoso",
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ error: "Usuario ya existente o hubo un error inesperado" });
  }
}

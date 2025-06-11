import { PrismaClient } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { UserSummary } from "@/types/user.type";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<UserSummary[]>>
) {
  if (req.method === "GET") {

    const { limit, offset } = req.query;

    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          active: true
        },
        take: limit ? Number(limit) : 10,
        skip: offset ? Number(offset) : 0,
      });
      res.status(200).json({data: users});
    } catch (error) {
      res.status(500).json({ error: "Error fetching users" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

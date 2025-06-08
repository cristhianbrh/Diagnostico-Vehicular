import { UserRole } from "@/types/auth"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseUserRole(role: string): UserRole {
  switch (role) {
    case "admin": return "admin"
    case "cliente": return "cliente"
    case "tecnico": return "tecnico"
    default: return "cliente"
  }
}
"use client";
import {
  Car,
  Upload,
  AlertTriangle,
  Wrench,
  CheckCircle,
  User,
  BarChart3,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { User as PrismaUser } from "@/generated/prisma";
import { Dispatch, SetStateAction } from "react";
import { AppViews } from "@/constants/app-views";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationButtons({
  currentUser,
}: {
  currentView: AppViews;
  setCurrentView: Dispatch<SetStateAction<AppViews>>;
  currentUser: PrismaUser | null;
}) {
  const pathname = usePathname();
  const pathSplit = pathname?.split("/").slice(0, 3).join("/");

  const navItems = [
    {
      link: "/vehicles",
      label: "Vehículos",
      icon: <Car className="h-4 w-4" />,
    },
    {
      link: "/vehicless",
      label: "Escáner",
      icon: <Upload className="h-4 w-4" />,
    },
    {
      link: "/vehicless",
      label: "Códigos DTC",
      icon: <AlertTriangle className="h-4 w-4" />,
    },
    {
      link: "/vehicless",
      label: "Síntomas",
      icon: <Wrench className="h-4 w-4" />,
    },
    {
      link: "/vehicless",
      label: "Soluciones",
      icon: <CheckCircle className="h-4 w-4" />,
    },
    {
      link: "/vehicless",
      label: "Reportes",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      link: "/vehicless",
      label: "Ayuda",
      icon: <HelpCircle className="h-4 w-4" />,
    },
  ] as { link: string; label: string; icon: JSX.Element }[];

  if (currentUser?.role === "admin") {
    navItems.splice(5, 0, {
      link: "/users",
      label: "Usuarios",
      icon: <User className="h-4 w-4" />,
    });
  }

  return (
    <>
      {navItems.map(({ link, label, icon }, index) => (
        <Link
          href={link}
          key={"navigatior_header_" + index}
          // variant={currentView === key ? "default" : "ghost"}
          // onClick={() => setCurrentView(key)}
        >
          <Button className="flex items-center gap-2" variant={link === pathSplit?"default":"ghost"}>
            {icon}
            {label}
          </Button>
        </Link>
      ))}
    </>
  );
}

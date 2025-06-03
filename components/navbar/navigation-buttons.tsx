import {
  Car, Upload, AlertTriangle, Wrench,
  CheckCircle, User, BarChart3, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { User as PrismaUser } from "@/generated/prisma";
import { Dispatch, SetStateAction } from "react";
import { APP_VIEWS, AppViews } from "@/constants/app-views";

export function NavigationButtons(
    { currentView, setCurrentView, currentUser } :
    {
        currentView: AppViews,
        setCurrentView: Dispatch<SetStateAction<AppViews>>,
        currentUser : PrismaUser | null
    }
) {
  const navItems = [
    { key: APP_VIEWS.VEHICLES, label: "Vehículos", icon: <Car className="h-4 w-4" /> },
    { key: APP_VIEWS.SCANNER, label: "Escáner", icon: <Upload className="h-4 w-4" /> },
    { key: APP_VIEWS.DTC, label: "Códigos DTC", icon: <AlertTriangle className="h-4 w-4" /> },
    { key: APP_VIEWS.SYMPTOMS, label: "Síntomas", icon: <Wrench className="h-4 w-4" /> },
    { key: APP_VIEWS.SOLUTIONS, label: "Soluciones", icon: <CheckCircle className="h-4 w-4" /> },
    { key: APP_VIEWS.REPORTS, label: "Reportes", icon: <BarChart3 className="h-4 w-4" /> },
    { key: APP_VIEWS.HELP, label: "Ayuda", icon: <HelpCircle className="h-4 w-4" /> },
  ] as { key: AppViews, label: string, icon: JSX.Element }[];

  if (currentUser?.role === "admin") {
    navItems.splice(5, 0, {
      key: APP_VIEWS.USERS,
      label: "Usuarios",
      icon: <User className="h-4 w-4" />,
    });
  }

  return (
    <>
      {navItems.map(({ key, label, icon }) => (
        <Button
          key={key}
          variant={currentView === key ? "default" : "ghost"}
          onClick={() => setCurrentView(key)}
          className="flex items-center gap-2"
        >
          {icon}
          {label}
        </Button>
      ))}
    </>
  );
}
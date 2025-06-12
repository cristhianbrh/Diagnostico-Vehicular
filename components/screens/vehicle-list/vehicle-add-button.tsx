import { Button } from "@/components/ui/button";
import { useVehicleManagement } from "@/hooks/use-vehicle-management";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function VehicleAddButton() {
  return (
    <div className="flex justify-between items-center py-5">
      <h2 className="text-2xl font-bold">Gestión de Vehículos</h2>
      <Link href="vehicles/create">
        <Button type="button" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Agregar Vehículo
        </Button>
      </Link>
    </div>
  );
}

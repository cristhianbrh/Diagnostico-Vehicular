import { Button } from "@/components/ui/button";
import { useVehicleManagement } from "@/hooks/use-vehicle-management";
import { Plus } from "lucide-react";

export default function VehicleAddButton() {

    const { addVehicleSelect } = useVehicleManagement();

    return (
        <div className="flex justify-between items-center py-5">
            <h2 className="text-2xl font-bold">Gestión de Vehículos</h2>
            <Button onClick={ addVehicleSelect } className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Agregar Vehículo
            </Button>
        </div>
    )
}
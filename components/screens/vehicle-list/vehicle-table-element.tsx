import { Button } from "@/components/ui/button";
import { Vehicle } from "@/generated/prisma";
import { useUser } from "@/hooks/use-user";
import { useVehicleManagement } from "@/hooks/use-vehicle-management";
import { AppStatus } from "@/types/app-status";
import { Edit, Eye, LucideProps, Trash2 } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export default function VehicleTableElement({ vehicle, StatusIcon, status} : {
    vehicle: Vehicle,
    StatusIcon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    status: AppStatus
}
){
    
    const {
        viewVehicleSelect,
        editVehicleSelect,
        deleteVehicleAction
    } = useVehicleManagement();

    const { getUserName } = useUser();

    return (
        <tr key={vehicle.id} className="border-b hover:bg-muted/50">
        <td className="p-2">
            <StatusIcon className={`h-5 w-5 text-${status.color}-500`} />
        </td>
        <td className="p-2 font-medium">{vehicle.marca}</td>
        <td className="p-2">{vehicle.modelo}</td>
        <td className="p-2">{vehicle.year}</td>
        <td className="p-2 font-mono">{vehicle.patente}</td>
        <td className="p-2">{getUserName(vehicle.userId)}</td>
        <td className="p-2">{vehicle.lastDiag?.toDateString() || "Sin diagnósticos"}</td>
        <td className="p-2">
            <div className="flex gap-1">
            <Button
                size="sm"
                variant="outline"
                onClick={() => viewVehicleSelect(vehicle)}
            >
                <Eye className="h-4 w-4" />
            </Button>
            
            <Button
                size="sm"
                variant="outline"
                onClick={() => editVehicleSelect}
            >
                <Edit className="h-4 w-4" />
            </Button>

            <Button
                size="sm"
                variant="destructive"
                onClick={ () => deleteVehicleAction(vehicle) }
            >
                <Trash2 className="h-4 w-4" />
            </Button>
            </div>
        </td>
        </tr>
    )
}
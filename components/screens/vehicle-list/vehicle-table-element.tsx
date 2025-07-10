import { Button } from "@/components/ui/button";
import { Vehicle } from "@/generated/prisma";
import { useUser } from "@/hooks/use-user";
import { AppStatus } from "@/types/app-status.type";
import { VehicleForTableSummary } from "@/types/vehicle.type";
import { Edit, Eye, LucideProps, Trash2 } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export default function VehicleTableElement({
  vehicle,
  StatusIcon,
  status,
}: {
  vehicle: VehicleForTableSummary;
  StatusIcon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  status: AppStatus;
}) {
  return (
    <tr key={vehicle.id} className="border-b hover:bg-muted/50">
      <td className="p-2">
        <StatusIcon className={`h-5 w-5 text-${status.color}-500`} />
      </td>
      <td className="p-2 font-medium">{vehicle.marca}</td>
      <td className="p-2">{vehicle.modelo}</td>
      <td className="p-2">{vehicle.year}</td>
      <td className="p-2 font-mono">{vehicle.patente}</td>
      <td className="p-2">{vehicle.user.name}</td>
      <td className="p-2">
        {/* {vehicle.lastDiag?.toDateString() || "Sin diagnósticos"} */}
        {vehicle.lastDiag && new Date(vehicle.lastDiag).toLocaleDateString("es-CL", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }) || "Sin diagnósticos"}
      </td>
      <td className="p-2">
        <div className="flex gap-1">
          <Link href={"/vehicles/" + vehicle.id + "/view/"}>
            <Button size="sm" variant="outline">
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={"/vehicles/" + vehicle.id + "/modify/"}>
            <Button size="sm" variant="outline">
              <Edit className="h-4 w-4" />
            </Button>
          </Link>

          {/* <Button
                size="sm"
                variant="destructive"
                onClick={ () => deleteVehicleAction(vehicle) }
            >
                <Trash2 className="h-4 w-4" />
            </Button> */}
        </div>
      </td>
    </tr>
  );
}

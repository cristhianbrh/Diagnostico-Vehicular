"use client";
import { getVehicleStatus } from "@/utils/vehicles";
import VehicleTableElement from "./vehicle-table-element";
import { useVehicleManagementTable } from "@/hooks/useVehicleManagement";
import { AlertTriangle } from "lucide-react";

export default function VehicleTable() {
  const { vehicles } = useVehicleManagementTable();

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Estado</th>
            <th className="text-left p-2">Marca</th>
            <th className="text-left p-2">Modelo</th>
            <th className="text-left p-2">year</th>
            <th className="text-left p-2">Patente</th>
            <th className="text-left p-2">Propietario</th>
            <th className="text-left p-2">Último Diagnóstico</th>
            <th className="text-left p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehicles &&
            vehicles.map((vehicle) => {
              const status = getVehicleStatus(vehicle.status);

              return (
                <VehicleTableElement
                  key={vehicle.id}
                  vehicle={vehicle}
                  StatusIcon={status.icon}
                  status={status}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

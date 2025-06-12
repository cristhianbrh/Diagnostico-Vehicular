"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VehicleTableElement from "./vehicle-table-element";
import VehicleAddButton from "./vehicle-add-button";
import { useVehicleManagementTable } from "@/hooks/useVehicleManagement";
import { AlertTriangle } from "lucide-react";

export default function VehicleTable() {
  const { vehicles, errors } = useVehicleManagementTable();

  return (
    <>
      <VehicleAddButton />

      <Card>
        <CardHeader>
          <CardTitle>Vehículos Registrados</CardTitle>
          <CardDescription>
            Lista de todos los vehículos en el sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                    // const status = getVehicleStatus(vehicle);
                    // const StatusIcon = status.icon;
                    const status = {
                          color: "gray",
                          icon: AlertTriangle,
                          status: "sin-diagnosticos",
                        }
                    return (
                      <VehicleTableElement
                        key={vehicle.id}
                        vehicle={vehicle}
                        StatusIcon={status.icon}
                        status={{
                          color: "gray",
                          icon: AlertTriangle,
                          status: "sin-diagnosticos",
                        }}
                      />
                    );
                  })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

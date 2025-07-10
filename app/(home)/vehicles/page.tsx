"use client";
import VehicleAddButton from "@/components/screens/vehicle-list/vehicle-add-button";
import VehicleTable from "@/components/screens/vehicle-list/vehicle-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function VehiclesPage() {
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
          <VehicleTable />
        </CardContent>
      </Card>
    </>
  );
}

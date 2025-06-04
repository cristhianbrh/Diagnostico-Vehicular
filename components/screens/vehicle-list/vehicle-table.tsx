import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useVehicleManagement as useVehicleManagement } from "@/hooks/use-vehicle-management";
import VehicleTableElement from "./vehicle-table-element";
import VehicleAddButton from "./vehicle-add-button";

export default function VehicleTable() {

    const {
        vehicleData,
        getVehicleStatus,
    } = useVehicleManagement();

    return (
        <>
            <VehicleAddButton/>

            <Card>
                <CardHeader>
                    <CardTitle>Vehículos Registrados</CardTitle>
                    <CardDescription>Lista de todos los vehículos en el sistema</CardDescription>
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
                                { vehicleData && vehicleData.map((vehicle) => {
                                    const status = getVehicleStatus(vehicle)
                                    const StatusIcon = status.icon
                                    return <VehicleTableElement  key={vehicle.id} vehicle={vehicle} StatusIcon={StatusIcon} status={status}/>
                                })}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
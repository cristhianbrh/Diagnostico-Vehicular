import FormVehicleModify from "@/components/form/FormVehicleModify";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface VehiclesModifyPageProps {
  params: {
    idVehicle: string;
  };
}

export default function VehiclesModifyPage({
  params,
}: VehiclesModifyPageProps) {
  const idVehicle = parseInt(params.idVehicle);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl m-auto">
        <Card>
          <CardHeader>
            <CardTitle>Información del Vehículo</CardTitle>
          </CardHeader>
          <CardContent>
            <FormVehicleModify idVehicle={idVehicle} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import FormVehiclesCreate from "@/components/form/FormVehiclesCreate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VehiclesCreatePage() {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl m-auto">
        <Card>
          <CardHeader>
            <CardTitle>Información del Vehículo</CardTitle>
          </CardHeader>
          <CardContent>
            <FormVehiclesCreate />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

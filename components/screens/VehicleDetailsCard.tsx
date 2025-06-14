import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { format } from "@formkit/tempo";

interface VehicleDetailsCardProps {
  vehicle: any;
}

// SRP: Solo muestra los detalles del vehículo
const VehicleDetailsCard: React.FC<VehicleDetailsCardProps> = ({ vehicle }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Car className="h-6 w-6" />
        {vehicle.marca} {vehicle.modelo} ({vehicle.year})
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label className="text-sm font-medium text-muted-foreground">VIN</Label>
          <p className="font-mono text-sm">{vehicle.vin}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Patente</Label>
          <p className="font-mono">{vehicle.patente}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Motor</Label>
          <p>{vehicle.motor}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Kilometraje</Label>
          <p>{vehicle.km?.toLocaleString()} km</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Propietario</Label>
          <p>{vehicle.user.name}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Fecha Adquisición</Label>
          <p>{format(vehicle.fechaAdq, "full") || "No especificada"}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default VehicleDetailsCard;

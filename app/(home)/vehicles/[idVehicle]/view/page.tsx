"use client";

import ViewVehicleComponent from "@/components/screens/ViewVehicleComponent";

interface VehiclesModifyPageProps {
  params: {
    idVehicle: string;
  };
}

export default function VehiclesViewPage({ params }: VehiclesModifyPageProps) {
  const idVehicle = parseInt(params.idVehicle);

  return <ViewVehicleComponent idVehicle={idVehicle} />;
}

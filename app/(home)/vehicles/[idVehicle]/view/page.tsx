"use client";

import ViewVehicleComponent from "@/components/screens/ViewVehicleComponent";
import React from "react";

interface VehiclesModifyPageProps {
  params: Promise<{ idVehicle: string }>;
}

// Principio: Open/Closed (OCP) y migración segura a nuevas APIs
export default function VehiclesViewPage({ params }: VehiclesModifyPageProps) {
  // Unwrap params usando React.use() según la nueva recomendación de Next.js
  const { idVehicle } = React.use(params);
  const idVehicleNumber = parseInt(idVehicle);

  return <ViewVehicleComponent idVehicle={idVehicleNumber} />;
}

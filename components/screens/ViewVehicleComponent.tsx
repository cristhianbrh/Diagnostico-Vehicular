import React from "react";
import FormVehicleModify from "@/components/form/FormVehicleModify";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useVehicleView } from "@/hooks/useVehicleView";
import Link from "next/link";
import VehicleDetailsCard from "./VehicleDetailsCard";
import VehicleStats from "./VehicleStats";
import DiagnosticHistory from "./DiagnosticHistory";
import DiagnosticSolveForm from "./DiagnosticSolveForm";

const ViewVehicleComponent = ({ idVehicle }: { idVehicle: number }) => {
  const {
    vehicleCurrent,
    getVehicleStats,
    setLoading,
    loading,
    handleSubmitForm,
    errors
  } = useVehicleView(idVehicle);

  if (!vehicleCurrent) return <p>Load</p>;
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/vehicles">
            <Button variant="outline">← Volver</Button>
          </Link>
          <h2 className="text-2xl font-bold">Detalles del Vehículo</h2>
        </div>
        {/* SRP: Detalles del vehículo */}
        <VehicleDetailsCard vehicle={vehicleCurrent} />
        {/* SRP: Estadísticas del vehículo */}
        <VehicleStats stats={getVehicleStats()} />
        {/* SRP: Historial de diagnósticos */}
        <Card>
          <CardHeader>
            <CardTitle>Historial de Diagnósticos</CardTitle>
          </CardHeader>
          <CardContent>
            <DiagnosticHistory diagnostics={vehicleCurrent.diagnostics} />
          </CardContent>
        </Card>
        {/* SRP: Resolver diagnósticos */}
        <Card className="my-6">
          <CardHeader>
            <CardTitle>Resolver Problema del Vehículo</CardTitle>
            <CardDescription>
              Selecciona un diagnóstico pendiente para marcarlo como resuelto y agregar detalles de la solución.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DiagnosticSolveForm
              diagnostics={vehicleCurrent.diagnostics}
              loading={loading}
              errors={errors}
              handleSubmitForm={handleSubmitForm}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ViewVehicleComponent;

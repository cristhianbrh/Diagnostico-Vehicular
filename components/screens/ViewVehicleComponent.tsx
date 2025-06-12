import React from "react";
import FormVehicleModify from "@/components/form/FormVehicleModify";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useVehicleView } from "@/hooks/useVehicleView";
import {
  AlertTriangle,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  User,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { format } from "@formkit/tempo";
import { Badge } from "@/components/ui/badge";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

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

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="h-6 w-6" />
              {vehicleCurrent.marca} {vehicleCurrent.modelo} (
              {vehicleCurrent.year})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  VIN
                </Label>
                <p className="font-mono text-sm">{vehicleCurrent.vin}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  Patente
                </Label>
                <p className="font-mono">{vehicleCurrent.patente}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  Motor
                </Label>
                <p>{vehicleCurrent.motor}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  Kilometraje
                </Label>
                <p>{vehicleCurrent.km?.toLocaleString()} km</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  Propietario
                </Label>
                <p>{vehicleCurrent.user.name}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  Fecha Adquisición
                </Label>
                <p>
                  {format(vehicleCurrent.fechaAdq, "full") || "No especificada"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estadísticas del vehículo */}
        {(() => {
          const stats = getVehicleStats();
          return (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Diagnósticos
                      </p>
                      <p className="text-2xl font-bold">{stats.totalDiags}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Resueltos</p>
                      <p className="text-2xl font-bold">{stats.resueltos}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Pendientes
                      </p>
                      <p className="text-2xl font-bold">{stats.pendientes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Graves</p>
                      <p className="text-2xl font-bold">{stats.graves}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })()}

        {/* Historial de diagnósticos */}
        <Card>
          <CardHeader>
            <CardTitle>Historial de Diagnósticos</CardTitle>
          </CardHeader>
          <CardContent>
            {(() => {
              if (vehicleCurrent.diagnostics.length === 0) {
                return (
                  <p className="text-muted-foreground text-center py-8">
                    No hay diagnósticos
                  </p>
                );
              }

              return (
                <div className="space-y-4">
                  {vehicleCurrent.diagnostics.map((diag) => (
                    <Card
                      key={diag.id}
                      className="border-l-4 border-l-blue-500"
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">
                              {new Date(diag.fecha).toLocaleDateString(
                                "es-CL",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "2-digit",
                                }
                              )}{" "}
                              {new Date(diag.fecha).toLocaleTimeString(
                                "es-CL",
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
                            </span>
                            <Badge
                              variant={
                                diag.estado === "resuelto"
                                  ? "default"
                                  : diag.estado === "pendiente"
                                  ? "secondary"
                                  : diag.estado === "grave"
                                  ? "destructive"
                                  : "outline"
                              }
                            >
                              {diag.estado}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-4 w-4" />
                            {diag.tecnico}
                          </div>
                        </div>
                        <p className="mb-2">{diag.desc}</p>
                        {diag.dtcs && diag.dtcs.length > 0 && (
                          <div className="mb-2">
                            <Label className="text-sm font-medium">
                              Códigos DTC:
                            </Label>
                            <div className="flex gap-1 mt-1">
                              {diag.dtcs.map((diag_dtc, index) => (
                                <Badge
                                  key={
                                    "diag_dtc" + diag.id + diag_dtc.code + index
                                  }
                                  variant="outline"
                                  className="font-mono text-xs"
                                >
                                  {diag_dtc.code}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="mb-5">
                          {diag.dtcs.map((diag_dtc) => (
                            <Badge
                              key={"history_" + diag.id + diag_dtc.dtcCode}
                              variant="outline"
                              className="font-mono text-xs"
                            >
                              {diag_dtc.dtcCode}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-col gap-5">
                          {diag.detalles && (
                            <div>
                              <Label className="text-sm font-medium">
                                Detalles:
                              </Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                {diag.detalles}
                              </p>
                            </div>
                          )}
                          {diag.aditionalSymptom && (
                            <div>
                              <Label className="text-sm font-medium">
                                Síntomas Adicionales:
                              </Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                {diag.aditionalSymptom}
                              </p>
                            </div>
                          )}
                          {diag.symptoms && diag.symptoms.length > 0 && (
                            <div className="mb-2">
                              <Label className="text-sm font-medium">
                                Síntomas Asociados:
                              </Label>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {diag.symptoms.map((sym_dia) => {
                                  if (!sym_dia) return null;
                                  return (
                                    <Badge
                                      key={`symptom_${diag.id}_${sym_dia.symptom.id}`}
                                      variant="outline"
                                      className="text-xs px-2 py-1 flex flex-col items-start min-w-[120px]"
                                    >
                                      <span className="font-medium">
                                        {sym_dia.symptom.name}
                                      </span>
                                      <span className="text-xs text-muted-foreground">
                                        {sym_dia.symptom.description}
                                      </span>
                                    </Badge>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                          {diag.noteTecnicSym && (
                            <div>
                              <Label className="text-sm font-medium">
                                Notas del Técnico:
                              </Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                {diag.noteTecnicSym}
                              </p>
                            </div>
                          )}
                          {diag.solutionText && (
                            <div>
                              <Label className="text-sm font-medium">
                                Detalles de la solucion:
                              </Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                {diag.solutionText}
                              </p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              );
            })()}
          </CardContent>
        </Card>

        <Card className="my-6">
          <CardHeader>
            <CardTitle>Resolver Problema del Vehículo</CardTitle>
            <CardDescription>
              Selecciona un diagnóstico pendiente para marcarlo como resuelto y
              agregar detalles de la solución.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {(() => {
              const pendingDiags = vehicleCurrent.diagnostics.filter(
                (d) => d.estado !== "resuelto"
              );
              if (pendingDiags.length === 0) {
                return (
                  <p className="text-muted-foreground">
                    No hay diagnósticos pendientes o graves para este vehículo.
                  </p>
                );
              }
              return pendingDiags.map((diag) => (
                <form
                  key={diag.id}
                  className="mb-4 border rounded p-4"
                  onSubmit={(e) => handleSubmitForm(e, diag.id)}
                >
                  <div className="mb-2">
                    <span className="font-semibold">DTC:</span>{" "}
                    {diag.dtcs && diag.dtcs.length > 0
                      ? diag.dtcs.map((dtc, idx) => (
                          <span
                            key={dtc.dtcCode || dtc.code || idx}
                            className="font-mono text-xs mr-2"
                          >
                            {dtc.dtcCode || dtc.code}
                          </span>
                        ))
                      : "Sin DTC"}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Descripción:</span>{" "}
                    {diag.desc}
                  </div>
                  <div className="mb-2">
                    <Label htmlFor={`detalles-${diag.id}`}>
                      Detalles de la solución
                    </Label>
                    <Input
                      id={`detalles-${diag.id}`}
                      name="detalles"
                      defaultValue={diag.detalles || ""}
                      placeholder="Describe la solución aplicada"
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="mt-2">
                    Marcar como resuelto
                  </Button>
                  {errors.solve && (
                    <p className="text-red-500 text-sm mt-2">{errors.solve}</p>
                  )}
                </form>
              ));
            })()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ViewVehicleComponent;

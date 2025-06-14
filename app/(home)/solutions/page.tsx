"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSolutionsView } from "@/hooks/useSolutionsView";
import { Label } from "@radix-ui/react-label";
import { AlertCircle, CheckCircle, ExternalLink } from "lucide-react";

export default function SolutionsPage() {
  const {
    diagnosticSelectSolutions,
    setDiagnosticSelectSolutions,
    setVehicleSelectSymtoms,
    vehicleSelectSymtoms,
    vehiclesData,
    diagnostics,
  } = useSolutionsView();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Recomendaciones de Solución</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Generador de recomendaciones */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Generar Recomendaciones
            </CardTitle>
            <CardDescription>
              Basado en códigos DTC y síntomas detectados
            </CardDescription>
          </CardHeader>
          <div className="px-5">
            <Label htmlFor="vehicleSelect">Vehículo</Label>
            <Select
              value={
                vehicleSelectSymtoms !== -1
                  ? vehicleSelectSymtoms.toString()
                  : ""
              }
              onValueChange={(value) => setVehicleSelectSymtoms(Number(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar vehículo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="-1">Todos los vehículos</SelectItem>
                {vehiclesData.map((vehicle) => (
                  <SelectItem key={vehicle.id} value={vehicle.id.toString()}>
                    {vehicle.marca} {vehicle.modelo} - {vehicle.patente}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="px-5 mt-4">
            <Label htmlFor="diagnosticSelect">Diagnóstico</Label>
            <select
              name="diagnosticSelect"
              id="diagnosticSelect"
              className="w-full border rounded px-2 py-2 mt-1"
              required
              value={diagnosticSelectSolutions.toString()}
              onChange={(e) =>
                setDiagnosticSelectSolutions(Number(e.target.value))
              } // avoid react warning
            >
              <option value="-1">Seleccionar diagnóstico</option>
              {diagnostics
                .filter(
                  (dt) =>
                    vehicleSelectSymtoms !== -1 &&
                    dt.vehicleId === vehicleSelectSymtoms &&
                    dt.estado !== "resuelto"
                )
                .map((diag_dg) => (
                  <option key={diag_dg.id} value={diag_dg.id.toString()}>
                    {diag_dg.desc} -{" "}
                    {new Date(diag_dg.fecha).toLocaleDateString("es-CL", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}{" "}
                    {new Date(diag_dg.fecha).toLocaleTimeString("es-CL", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </option>
                ))}
            </select>
          </div>
          <CardContent className="space-y-4 mt-5">
            <div>
              <Label>Códigos DTC Detectados</Label>
              <div className="mt-2 flex gap-2 flex-wrap">
                {(() => {
                  const selectedDiagnostic = diagnostics.findLast(
                    (d_find) => d_find.id === diagnosticSelectSolutions
                  );
                  console.log(selectedDiagnostic);
                  if (
                    selectedDiagnostic &&
                    Array.isArray(selectedDiagnostic.dtcs)
                  ) {
                    return selectedDiagnostic.dtcs.map(
                      (diagn_current, idx: number) => (
                        <Badge
                          key={diagn_current.dtcCode + idx}
                          variant="outline"
                          className="font-mono"
                        >
                          {diagn_current.dtcCode}
                        </Badge>
                      )
                    );
                  }
                  return null;
                })()}
              </div>
            </div>

            <div>
              <Label>Síntomas Reportados</Label>
              <div className="mt-2 space-y-2">
                {(() => {
                  const selectedDiagnostic = diagnostics.findLast(
                    (d_find) => d_find.id === diagnosticSelectSolutions
                  );

                  if (
                    selectedDiagnostic &&
                    Array.isArray(selectedDiagnostic.symptoms)
                  ) {
                    return selectedDiagnostic.symptoms.map(
                      (diagn_current, idx) => {
                        return (
                          <div
                            key={diagn_current.symptomId + "-" + idx}
                            className="flex items-center gap-2"
                          >
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                            <span className="text-sm">
                              {diagn_current?.symptom.name ??
                                "Síntoma no encontrado"}
                            </span>
                          </div>
                        );
                      }
                    );
                  }

                  return null;
                })()}
              </div>
            </div>

            {/* Recomendaciones generadas (hardcodeadas horriblemente) */}
            <div className="border-t pt-4">
              <Label className="text-base font-semibold">
                Recomendaciones Priorizadas
              </Label>
              <div className="mt-3 space-y-3">
                {(() => {
                  const selectedDiagnostic = diagnostics.findLast(
                    (d_find) => d_find.id === diagnosticSelectSolutions
                  );

                  if (
                    selectedDiagnostic &&
                    Array.isArray(selectedDiagnostic.dtcs)
                  ) {
                    return selectedDiagnostic.dtcs.flatMap(
                      (diagn_current, idx) => {
                        const diagn_current_dtc = diagn_current.dtc;
                        return diagn_current.dtc.solutions.map(
                          (dcInfoSolution, solIdx) => (
                            <Card
                              key={`${diagn_current.dtcCode}-${dcInfoSolution.id}-${idx}-${solIdx}`}
                              className={`border-l-4 ${
                                diagn_current_dtc.severity === "grave"
                                  ? "border-l-red-500"
                                  : diagn_current_dtc.severity === "media"
                                  ? "border-l-yellow-500"
                                  : "border-l-green-500"
                              }`}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className="font-medium">
                                    <strong>{diagn_current_dtc.code}</strong> -{" "}
                                    {dcInfoSolution.text}
                                  </h4>
                                  <Badge
                                    variant={
                                      diagn_current_dtc.severity === "Alta"
                                        ? "destructive"
                                        : diagn_current_dtc.severity === "Media"
                                        ? "secondary"
                                        : "outline"
                                    }
                                  >
                                    {diagn_current_dtc.severity}
                                  </Badge>
                                </div>
                              </CardContent>
                            </Card>
                          )
                        );
                      }
                    );
                  }
                  return null;
                })()}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enlaces y recursos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Recursos Técnicos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: "Manual de Servicio Toyota", url: "#", type: "PDF" },
              { title: "Diagrama de Cableado", url: "#", type: "PDF" },
              { title: "Video: Cambio de Bujías", url: "#", type: "Video" },
              { title: "Especificaciones Técnicas", url: "#", type: "Web" },
              { title: "Foro de Técnicos", url: "#", type: "Foro" },
            ].map((resource, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border rounded"
              >
                <div>
                  <p className="text-sm font-medium">{resource.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {resource.type}
                  </p>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

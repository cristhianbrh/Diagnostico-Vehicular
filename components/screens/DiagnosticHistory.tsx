import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { VehicleDiagnosticDtcSummary_diagnostic } from "@/types/vehicle.type";

interface DiagnosticHistoryProps {
  diagnostics: VehicleDiagnosticDtcSummary_diagnostic[];
}

// SRP: Solo muestra el historial de diagnósticos
const DiagnosticHistory: React.FC<DiagnosticHistoryProps> = ({
  diagnostics,
}) => {
  if (!diagnostics.length) {
    return (
      <p className="text-muted-foreground text-center py-8">
        No hay diagnósticos
      </p>
    );
  }
  return (
    <div className="space-y-4">
      {diagnostics.map((diag) => (
        <Card key={diag.id} className="border-l-4 border-l-blue-500">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="ml-2">
                  {new Date(diag.fecha).toLocaleDateString("es-CL", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}{" "}
                  {new Date(diag.fecha).toLocaleTimeString("es-CL", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <User className="h-4 w-4 ml-4" />
                <span className="ml-2">{diag.tecnico}</span>
                <Badge
                  variant={
                    diag.estado === "resuelto" ? "outline" : "destructive"
                  }
                  className="ml-4"
                >
                  {diag.estado}
                </Badge>
              </div>
            </div>
            <p className="mb-2">{diag.desc}</p>
            {diag.dtcs && diag.dtcs.length > 0 && (
              <div className="mb-2">
                <Label className="text-sm font-medium">Códigos DTC:</Label>
                <div className="flex gap-1 mt-1">
                  {diag.dtcs.map((diag_dtc, index) => (
                    <Badge
                      key={
                        "diag_dtc" +
                        diag.id +
                        (diag_dtc.code ?? diag_dtc.dtcCode) +
                        index
                      }
                      variant="outline"
                      className="font-mono text-xs"
                    >
                      {diag_dtc.code || diag_dtc.dtcCode}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-col gap-5">
              {diag.detalles && (
                <div>
                  <Label className="text-sm font-medium">Detalles:</Label>
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
};

export default DiagnosticHistory;

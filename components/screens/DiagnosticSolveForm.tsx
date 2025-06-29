import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";

interface DiagnosticSolveFormProps {
  diagnostics: any[];
  loading: boolean;
  errors: { solve?: string };
  handleSubmitForm: (e: React.SyntheticEvent, id: number) => void;
}

// SRP: Solo muestra los formularios para resolver diagnósticos
const DiagnosticSolveForm: React.FC<DiagnosticSolveFormProps> = ({
  diagnostics,
  loading,
  errors,
  handleSubmitForm,
}) => {
  const pendingDiags = diagnostics.filter((d) => d.estado !== "resuelto");
  if (pendingDiags.length === 0) {
    return (
      <p className="text-muted-foreground">
        No hay diagnósticos pendientes o graves para este vehículo.
      </p>
    );
  }
  return (
    <>
      {pendingDiags.map((diag) => (
        <form
          key={diag.id}
          className="mb-4 border rounded p-4"
          onSubmit={(e) => handleSubmitForm(e, diag.id)}
        >
          <div className="mb-2">
            <span className="font-semibold">DTC:</span>{" "}
            {diag.dtcs && diag.dtcs.length > 0
              ? diag.dtcs.map((dtc: any, idx: number) => (
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
            <span className="font-semibold">Descripción:</span> {diag.desc}
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
      ))}
    </>
  );
};

export default DiagnosticSolveForm;

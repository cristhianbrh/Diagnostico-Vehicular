import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSymptomsForm } from "@/hooks/useSymptomsForm";
import { Label } from "@radix-ui/react-label";
import { Plus } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";

export default function FormSymptoms({
  selectedSymptoms = [],
  setSelectedSymptoms,
}: {
  selectedSymptoms?: number[];
  setSelectedSymptoms: Dispatch<SetStateAction<number[]>>;
}) {
  const {
    loading,
    setVehicleSelectSymtoms,
    vehicleSelectSymtoms,
    vehiclesData,
    diagnosticSelectSolutions,
    setDiagnosticSelectSolutions,
    diagnostics,
    symptoms,
    errors,
    successMsg,
    handleSubmitForm,
  } = useSymptomsForm(selectedSymptoms);

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <Label htmlFor="vehicleSelect">Vehículo</Label>
        <Select
          value={
            vehicleSelectSymtoms !== -1 ? vehicleSelectSymtoms.toString() : ""
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
      <div>
        <Label htmlFor="diagnosticSelect">Diagnóstico</Label>
        <select
          name="diagnosticSelect"
          id="diagnosticSelect"
          className="w-full border rounded px-2 py-2 mt-1"
          required
          value={diagnosticSelectSolutions.toString()}
          onChange={(e) => setDiagnosticSelectSolutions(Number(e.target.value))} // avoid react warning
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

      <div>
        <Label className="text-sm font-medium">Síntomas Predefinidos</Label>
        <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
          {symptoms.map((symptom) => (
            <div key={symptom.id} className="flex items-start space-x-2">
              <Checkbox
                id={`symptom-${symptom.id}`}
                checked={selectedSymptoms.includes(symptom.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedSymptoms([...selectedSymptoms, symptom.id]);
                  } else {
                    setSelectedSymptoms(
                      selectedSymptoms.filter((id) => id !== symptom.id)
                    );
                  }
                }}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor={`symptom-${symptom.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {symptom.name}
                </label>
                <p className="text-xs text-muted-foreground">
                  {symptom.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="customSymptoms">Síntomas Adicionales</Label>
        <Textarea
          id="customSymptoms"
          placeholder="Describe otros síntomas observados..."
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="techNotes">Notas del Técnico</Label>
        <Textarea
          id="techNotes"
          placeholder="Observaciones técnicas adicionales..."
          rows={3}
        />
      </div>

      <Button className="w-full" type="submit" disabled={loading}>
        <Plus className="h-4 w-4 mr-2" />
        {loading ? "Registrando..." : "Registrar Síntomas"}
      </Button>
      {errors.submit && (
        <p className="text-red-500 text-sm mt-2">{errors.submit}</p>
      )}
      {successMsg && (
        <p className="text-green-600 text-sm mt-2">{successMsg}</p>
      )}
    </form>
  );
}

// import { ScannerService } from "@/core/services/scanner/scanner.service";
import { DiagnosticService } from "@/core/services/diagnostic/diagnostic.service";
import { SymptomService } from "@/core/services/symptom/symptom.service";
import { VehicleService } from "@/core/services/vehicle/vehicle.service";
import { Diagnostic, Symptom } from "@/generated/prisma";
import { VehicleSummary } from "@/types/vehicle.type";
import axios from "axios";
import { useEffect, useState } from "react";
import "reflect-metadata";

export function useSymptomsForm(selectedSymptoms: number[]) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ submit?: string; dtc?: string }>({});
  const [successMsg, setSuccessMsg] = useState("");
  const [vehicleSelectSymtoms, setVehicleSelectSymtoms] = useState<number>(-1);
  const [vehiclesData, setVehiclesData] = useState<VehicleSummary[]>([]);
  const [diagnosticSelectSolutions, setDiagnosticSelectSolutions] =
    useState<number>(-1);
  const [diagnostics, setDiagnostics] = useState<Diagnostic[]>([]);
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const vehicleService = new VehicleService();
  const diagnosticService = new DiagnosticService();
  const symptomService = new SymptomService();

  const handleSubmitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccessMsg("");
    // Obtener valores del formulario
    const form = e.target as HTMLFormElement;
    // Diagnóstico seleccionado
    const diagnosticSelect = form.querySelector(
      '[name="diagnosticSelect"]'
    ) as HTMLSelectElement;
    const diagnosticId = diagnosticSelect?.value
      ? Number(diagnosticSelect.value)
      : null;
    // Síntomas seleccionados
    const selectedSymptomIds = selectedSymptoms;
    // Síntomas adicionales
    const aditionalSymptom =
      (form.querySelector("#customSymptoms") as HTMLTextAreaElement)?.value ||
      "";
    // Notas del técnico
    const noteTecnic =
      (form.querySelector("#techNotes") as HTMLTextAreaElement)?.value || "";

    if (!diagnosticId) {
      setErrors({ submit: "Selecciona un diagnóstico" });
      setLoading(false);
      return;
    }
    try {
      await axios.post("/api/symptoms/upload", {
        diagnosticId,
        symptoms: selectedSymptomIds,
        aditionalSymptom,
        noteTecnic,
      });
      setSuccessMsg("Síntomas registrados correctamente");
      // getAllDiagnostics();
      // setSelectedSymptoms([]);
      form.reset();
    } catch (error) {
      setErrors({ submit: "Error al registrar síntomas" });
    }
    setLoading(false);
  };

  const getAllVehicles = async () => {
    const { data, error } = await vehicleService.getAll();
    if (data) {
      setVehiclesData(data);
    }
  };
  const getAllDiagnostics = async () => {
    try {
      const { data } = await diagnosticService.getAll();
      if (data) {
        setDiagnostics(data || []);
      }
    } catch (error) {
      setErrors({ dtc: "Error al obtener base de datos de diagnostico" });
    }
  };

  const getAllSymptoms = async () => {
    try {
      const { data } = await symptomService.getAll();
      if (data) {
        setSymptoms(data || []);
      }
    } catch (error) {
      setErrors({ dtc: "Error al obtener base de datos de Síntomas" });
    }
  };
  useEffect(() => {
    getAllVehicles();
    getAllDiagnostics();
    getAllSymptoms();
  }, []);

  return {
    loading,
    vehicleSelectSymtoms,
    setVehicleSelectSymtoms,
    vehiclesData,
    diagnosticSelectSolutions,
    setDiagnosticSelectSolutions,
    handleSubmitForm,
    diagnostics,
    symptoms,
    successMsg,
    errors,
  };
}

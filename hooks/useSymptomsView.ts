// import { ScannerService } from "@/core/services/scanner/scanner.service";
import { SymptomService } from "@/core/services/symptom/symptom.service";
import { Symptom } from "@/generated/prisma";
import axios from "axios";
import { useEffect, useState } from "react";
import "reflect-metadata";

export function useSymptomsView() {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);

  const [errors, setErrors] = useState({
    symptoms: "",
  });
  const symptomsService = new SymptomService();

  const getAllSymptoms = async () => {
    try {
      const { data, error } = await symptomsService.getAll();
      if (error) {
        setErrors({ symptoms: error });
        return;
      }
      console.log(data);
      setSymptoms(data || []);
    } catch (error) {
      setErrors({ symptoms: "Error al obtener síntomas" });
    }
  };

  useEffect(() => {
    getAllSymptoms();
  }, []);

  return {
    symptoms,
    errors,
    symptomsService,
    selectedSymptoms,
    setSelectedSymptoms,
  };
}

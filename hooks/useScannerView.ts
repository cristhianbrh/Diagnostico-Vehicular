// import { ScannerService } from "@/core/services/scanner/scanner.service";
import { ScannerFile } from "@/generated/prisma";
import { getAccessTokenData, IAccessToken } from "@/utils/cookies";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "reflect-metadata";

export function useScannerView() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  type ScannerData = {
    fileName: string;
    uploadDate: string;
    vehicleVin: string;
    scannerType: string;
    dtcCodes: any[];
    status: string;
    rawData: any;
    id: number;
  };
  const [scannerData, setScannerData] = useState<
    (ScannerFile & { dtcCodes: string[] })[]
  >([]);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  type Vehicle = {
    id: number;
    vin: string;
    // add other properties as needed
  };
  const [vehicleData, setVehicleData] = useState<Vehicle[]>([]);
  const [currentUser, setCurrentUser] = useState<IAccessToken>();
  const [errors, setErrors] = useState({
    upload: "",
    diagnostic: "",
  });
  const [diagnostics, setDiagnostics] = useState<any[]>([]);
  // const scanner = new ScannerService();

  const getDataCsv = (result: string) => {
    let dtcCodes: string[] = [];
    let vehicleVin = "";

    const lines = result.split("\n");
    const headers = lines[0].split(",");
    const dtcIndex = headers.findIndex(
      (h) => h.toLowerCase().includes("dtc") || h.toLowerCase().includes("code")
    );
    const vinIndex = headers.findIndex((h) => h.toLowerCase().includes("vin"));
    if (dtcIndex !== -1) {
      dtcCodes = lines
        .slice(1)
        .map((line) => line.split(",")[dtcIndex])
        .filter((code) => code && code.trim());
    }
    if (vinIndex !== -1) {
      const vinValue = lines[1]?.split(",")[vinIndex];
      vehicleVin = vinValue ? vinValue.trim() : "";
    }
    return { dtcCodes, vehicleVin };
  };

  const handleFileUpload = async (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    const files: File[] = Array.from(input.files as FileList);
    setLoading(true);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const result = (event.target as FileReader).result as string;
          let parsedData = null;
          let dtcCodes = [];
          let vehicleVin = "";

          if (file.name.endsWith(".json")) {
            parsedData = JSON.parse(result);
            dtcCodes = parsedData.dtc_codes || parsedData.codes || [];
            vehicleVin = parsedData.vin || "";
          } else if (file.name.endsWith(".csv")) {
            // Extraer DTCs y VIN del CSV usando la función utilitaria
            const { dtcCodes: csvDtcCodes, vehicleVin: csvVehicleVin } =
              getDataCsv(result);
            dtcCodes = csvDtcCodes;
            vehicleVin = csvVehicleVin;
          } else if (file.name.endsWith(".txt")) {
            const lines = result.split("\n");
            dtcCodes = lines
              .filter((line) => /^P[0-9A-F]{4}$/i.test(line.trim()))
              .map((line) => line.trim().toUpperCase());
            // Opcional: buscar VIN en el txt si hay una línea tipo VIN:XXXXXXXXXXXXXXX
            const vinLine = lines.find((line) =>
              /^VIN[:\s]/i.test(line.trim())
            );
            if (vinLine) {
              const match = vinLine.match(/VIN[:\s]*([A-HJ-NPR-Z0-9]{17})/i);
              if (match) vehicleVin = match[1].toUpperCase();
            }
          }
          const dateCurrent = new Date();
          const newScanData = {
            fileName: file.name,
            uploadDate: dateCurrent.toISOString(),
            vehicleVin: vehicleVin || parsedData?.vin || "",
            scannerType: parsedData?.scanner_type || "Desconocido",
            dtcCodes: dtcCodes,
            status: "processed",
            rawData: parsedData || { content: result },
          };

          // Guardar en la base de datos
          const scannerUpload = await axios
            .post<{ data: number }>("/api/scanner/upload", newScanData)
            .catch((r) => {
              console.log(r);
            });

          setScannerData((prev) => [
            ...prev,
            { id: Date.now(), ...newScanData, uploadDate: dateCurrent },
          ]);
          setUploadedFiles((prev) => [...prev, file.name]);

          console.log("vehiclevin: " + newScanData.vehicleVin);
          // Auto-asociar con vehículo si encuentra VIN
          if (newScanData.vehicleVin && scannerUpload) {
            const respVehicle = await axios
              .get<{data:{ id: string; diagnostics: any[] }}>(
                "/api/vehicle/get/getByVin/?vin=" + newScanData.vehicleVin
              )
              .catch((r) => null);

            if (respVehicle) {
              try {
                console.log(respVehicle);
                const res = await axios.post("/api/diagnostic/create", {
                  vehicleId: respVehicle.data.data.id,
                  fecha: new Date().toISOString(),
                  dtcCodes: dtcCodes || [],
                  desc: `Diagnóstico automático desde ${file.name}`,
                  tecnico: currentUser?.name || "Sistema",
                  estado: "pendiente",
                  detalles: `Datos importados automáticamente desde escáner`,
                  // symptoms: [],
                  scannerFileId: scannerUpload.data.data,
                  cost: 0,
                  duration: 0,
                });
                console.log(res.data.diagnostic);
                setDiagnostics((prev) => [...prev, res.data.diagnostic]);
              } catch (error) {
                setErrors((prev) => ({
                  ...prev,
                  diagnostic: "Error al crear diagnóstico automáticamente",
                }));
              }
            }
          }
        } catch (error) {
          let errorMessage = "Error desconocido";
          if (error instanceof Error) {
            errorMessage = error.message;
          }
          setErrors((prev) => ({
            ...prev,
            upload: `Error procesando ${file.name}: ${errorMessage}`,
          }));
        }
      };
      reader.readAsText(file);
    });

    setTimeout(() => setLoading(false), 1000);
  };

  const getUserCurrent = async () => {
    const data = await getAccessTokenData();
    setCurrentUser(data);
  };
  const getAllScannerData = async () => {
    await axios.get("/api/scanner/getAll").then((data) => {
      setScannerData(
        data.data.data.map((scanner: ScannerFile) => ({
          ...scanner,
          dtcCodes: getDataCsv(
            typeof scanner.rawData === "object" &&
              scanner.rawData !== null &&
              "content" in scanner.rawData
              ? (scanner.rawData as { content: string }).content?.toString() ||
                  ""
              : scanner.rawData?.toString() || ""
          ).dtcCodes,
        }))
      );
    });

    // const data = await scanner.getAll();
    // setScannerData(data);
  };

  useEffect(() => {
    getUserCurrent();
    getAllScannerData();
  }, []);

  return {
    fileInputRef,
    handleFileUpload,
    loading,
    uploadedFiles,
    errors,
    scannerData,
  };
}

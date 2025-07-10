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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSolutionsView } from "@/hooks/useSolutionsView";
import { VehicleSummary } from "@/types/vehicle.type";
import { Label } from "@radix-ui/react-label";
import { CheckCircle, Download, Eye, Printer } from "lucide-react";
import { useState } from "react";

interface IReportData {
  vehicle: VehicleSummary | undefined;
  diagnostics: {
    id: number;
    desc: string;
    vehicleId: number;
    fecha: Date;
    tecnico: string;
    estado: string;
    detalles: string;
    scannerFileId: number | null;
    cost: number;
    duration: number;
    solutionText: string | null;
    noteTecnicSym: string | null;
    aditionalSymptom: string | null;
  }[];
  totalCost: number;
  totalTime: number;
  dtcFrequency: { [key: string]: number };
  recommendations: {
    code: string;
    frequency: string;
    severity: string;
    solutions: { text: string }[];
  }[];
}

export default function ReportsPage() {
  const [reportData, setReportData] = useState<IReportData | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  const { vehiclesData, diagnostics } = useSolutionsView();

  // Función horrible para generar reporte
  const generateReport = (vehicleId: number) => {
    setLoading(true);
    const vehicle = vehiclesData.find((v) => v.id === vehicleId);
    const vehicleDiags = diagnostics.filter((d) => d.vehicleId === vehicleId);

    const reportData: IReportData = {
      vehicle: vehicle,
      diagnostics: vehicleDiags,
      totalCost: vehicleDiags.reduce((sum, d) => sum + (d.cost || 0), 0),
      totalTime: vehicleDiags.reduce((sum, d) => sum + (d.duration || 0), 0),
      dtcFrequency: {},
      recommendations: [],
    };

    // Análisis de frecuencia DTC (lógica horrible)
    vehicleDiags.forEach((diag) => {
      if (diag.dtcs) {
        diag.dtcs.forEach((code) => {
          reportData.recommendations.push({
            code: code.dtcCode,
            frequency: code.dtc.severity,
            severity: code.dtc.severity,
            solutions: code.dtc.solutions,
          });
          return (reportData.dtcFrequency[code.dtcCode] =
            (reportData.dtcFrequency[code.dtcCode] || 0) + 1);
        });
      }
    });

    // // Recomendaciones basadas en DTC (lógica hardcodeada horrible)
    // Object.keys(reportData.dtcFrequency).forEach((code) => {
    //   const dtcInfo = dtcDatabase.find((d) => d.code === code);
    //   if (dtcInfo) {
    //     reportData.recommendations.push({
    //       code: code,
    //       frequency: reportData.dtcFrequency[code],
    //       severity: dtcInfo.severity,
    //       solutions: dtcInfo.solutions,
    //     });
    //   }
    // });

    setReportData(reportData);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Historial y Reportes</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              if (!reportData) return;
              // Crear un contenido HTML simple para exportar
              const win = window.open("", "_blank");
              if (!win) return;
              win.document.write(`
                <html>
            <head>
              <title>Reporte Técnico</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 24px; }
                h1, h2, h3 { margin-bottom: 8px; }
                .badge { display: inline-block; background: #e5e7eb; border-radius: 4px; padding: 2px 8px; margin-right: 4px; font-size: 12px; }
                .section { margin-bottom: 24px; }
                ul { margin: 0; padding-left: 18px; }
              </style>
            </head>
            <body>
              <h1>Reporte Técnico</h1>
              <h2>${reportData.vehicle?.marca} ${
                reportData.vehicle?.modelo
              } - ${reportData.vehicle?.patente || ""}</h2>
              <div class="section">
                <strong>Diagnósticos:</strong> ${
                  reportData.diagnostics.length
                }<br/>
                <strong>Costo Total:</strong> $${reportData.totalCost.toLocaleString()}<br/>
                <strong>Tiempo Total:</strong> ${reportData.totalTime}h
              </div>
              <div class="section">
                <strong>Códigos DTC Frecuentes:</strong><br/>
                ${Object.entries(reportData.dtcFrequency)
                  .map(
                    ([code, count]) =>
                      `<span class="badge">${code} (${count}x)</span>`
                  )
                  .join(" ")}
              </div>
              <div class="section">
                <strong>Recomendaciones:</strong>
                <ul>
                  ${reportData.recommendations
                    .map(
                      (rec) =>
                        `<li>
                <span class="badge">${rec.code}</span>
                <span class="badge">${rec.severity}</span>
                <ul>
                  ${rec.solutions
                    .map(
                      (sol) =>
                        `<li>${typeof sol === "string" ? sol : sol.text}</li>`
                    )
                    .join("")}
                </ul>
              </li>`
                    )
                    .join("")}
                </ul>
              </div>
            </body>
                </html>
              `);
              win.document.close();
              win.print();
            }}
            disabled={!reportData}
          >
            <Download className="h-4 w-4 mr-2" />
            Exportar PDF
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              if (!reportData) return;
              // Imprimir la sección del reporte
              const printContent = document.getElementById(
                "report-print-section"
              );
              if (printContent) {
                const printWindow = window.open("", "_blank");
                if (!printWindow) return;
                printWindow.document.write(`
            <html>
              <head>
                <title>Imprimir Reporte</title>
                <style>
                  body { font-family: Arial, sans-serif; padding: 24px; }
                  h1, h2, h3 { margin-bottom: 8px; }
                  .badge { display: inline-block; background: #e5e7eb; border-radius: 4px; padding: 2px 8px; margin-right: 4px; font-size: 12px; }
                  .section { margin-bottom: 24px; }
                  ul { margin: 0; padding-left: 18px; }
                </style>
              </head>
              <body>
                ${printContent.innerHTML}
              </body>
            </html>
                `);
                printWindow.document.close();
                printWindow.print();
              }
            }}
            disabled={!reportData}
          >
            <Printer className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
        </div>
      </div>

      {/* Filtros de reporte */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros de Reporte</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label>Vehículo</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todos los vehículos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  {vehiclesData.map((vehicle) => (
                    <SelectItem key={vehicle.id} value={vehicle.id.toString()}>
                      {vehicle.marca} {vehicle.modelo} - {vehicle.patente}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Fecha Desde</Label>
              <Input type="date" />
            </div>

            <div>
              <Label>Fecha Hasta</Label>
              <Input type="date" />
            </div>

            <div>
              <Label>Estado</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todos los estados" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  <SelectItem value="resuelto">Resuelto</SelectItem>
                  <SelectItem value="pendiente">Pendiente</SelectItem>
                  <SelectItem value="grave">Grave</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button>Aplicar Filtros</Button>
            <Button variant="outline">Limpiar</Button>
            <Button
              variant="outline"
              onClick={() => generateReport(vehiclesData[0]?.id)}
              disabled={loading}
            >
              {loading ? "Generando..." : "Generar Reporte"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabla de diagnósticos */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de Diagnósticos</CardTitle>
          <CardDescription>
            {diagnostics.length} diagnóstico
            {diagnostics.length !== 1 ? "s" : ""} registrado
            {diagnostics.length !== 1 ? "s" : ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Fecha</th>
                  <th className="text-left p-2">Vehículo</th>
                  <th className="text-left p-2">Códigos DTC</th>
                  <th className="text-left p-2">Descripción</th>
                  <th className="text-left p-2">Técnico</th>
                  <th className="text-left p-2">Estado</th>
                  <th className="text-left p-2">Costo</th>
                  <th className="text-left p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {diagnostics
                  .sort(
                    (a, b) =>
                      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
                  )
                  .map((diag) => {
                    const vehicle = vehiclesData.find(
                      (v) => v.id === diag.vehicleId
                    );
                    return (
                      <tr key={diag.id} className="border-b hover:bg-muted/50">
                        <td className="p-2">
                          {typeof diag.fecha === "string"
                            ? diag.fecha
                            : diag.fecha.toLocaleDateString()}
                        </td>
                        <td className="p-2">
                          {vehicle
                            ? `${vehicle.marca} ${vehicle.modelo} - ${vehicle.patente}`
                            : "Vehículo no encontrado"}
                        </td>
                        <td className="p-2">
                          <div className="flex gap-1 flex-wrap">
                            {diag.dtcs?.map((code) => (
                              <Badge
                                key={"Dtccode_" + code.dtcCode + "_" + diag.id}
                                variant="outline"
                                className="font-mono text-xs"
                              >
                                {code.dtcCode}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="p-2 max-w-xs truncate">{diag.desc}</td>
                        <td className="p-2">{diag.tecnico}</td>
                        <td className="p-2">
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
                        </td>
                        <td className="p-2">
                          ${diag.cost?.toLocaleString() || "0"}
                        </td>
                        <td className="p-2">
                          <div className="flex gap-1">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Reporte generado */}
      {reportData && (
        <Card>
          <CardHeader>
            <CardTitle>Reporte Generado</CardTitle>
            <CardDescription>
              Reporte técnico para {reportData.vehicle?.marca}{" "}
              {reportData.vehicle?.modelo}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4" id="report-print-section">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">
                  {reportData.diagnostics.length}
                </p>
                <p className="text-sm text-muted-foreground">Diagnósticos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">
                  ${reportData.totalCost.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Costo Total</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{reportData.totalTime}h</p>
                <p className="text-sm text-muted-foreground">Tiempo Total</p>
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold">
                Códigos DTC Frecuentes
              </Label>
              <div className="mt-2 flex gap-2 flex-wrap">
                {Object.entries(reportData.dtcFrequency).map(
                  ([code, count]) => (
                    <Badge key={code} variant="outline">
                      {code} ({count}x)
                    </Badge>
                  )
                )}
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold">Recomendaciones</Label>
              <div className="mt-2 space-y-2">
                {reportData.recommendations.map((rec, index) => (
                  <div key={index} className="p-3 border rounded">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm">{rec.code}</span>
                      <Badge
                        variant={
                          rec.severity === "grave"
                            ? "destructive"
                            : rec.severity === "moderada"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {rec.severity}
                      </Badge>
                    </div>
                    <ul className="text-sm space-y-1">
                      {rec.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 mt-1 text-green-500" />
                          {typeof solution === "string"
                            ? solution
                            : solution.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

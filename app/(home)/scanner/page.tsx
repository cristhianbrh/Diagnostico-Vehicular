"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
import { useScannerView } from "@/hooks/useScannerView";
import { format } from "@formkit/tempo";
import { Label } from "@radix-ui/react-label";
import { AlertTriangle, Edit, FileText, Plus, Upload } from "lucide-react";

export default function ScannerPage() {
  const {
    fileInputRef,
    handleFileUpload,
    loading,
    uploadedFiles,
    errors,
    scannerData,
  } = useScannerView();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Datos del Escáner Automotriz</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subir archivos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Subir Archivos del Escáner
            </CardTitle>
            <CardDescription>
              Soporta archivos JSON, CSV y TXT de escáneres OBD2
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".json,.csv,.txt"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="w-full"
                disabled={loading}
              >
                <Upload className="h-4 w-4 mr-2" />
                {loading ? "Procesando..." : "Seleccionar Archivos"}
              </Button>
            </div>

            {uploadedFiles.length > 0 && (
              <div>
                <Label className="text-sm font-medium">Archivos subidos:</Label>
                <div className="mt-2 space-y-1">
                  {uploadedFiles.map((fileName, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <FileText className="h-4 w-4 text-green-500" />
                      {fileName}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {errors.upload && (
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{errors.upload}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Entrada manual de DTC */}
        {/* <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit className="h-5 w-5" />
              Entrada Manual de Códigos DTC
            </CardTitle>
            <CardDescription>
              Ingresa códigos DTC manualmente si no tienes archivo
            </CardDescription>
          </CardHeader> */}
        {/* <CardContent className="space-y-4">
            <div>
              <Label htmlFor="manualDtc">Código DTC (ej: P0301)</Label>
              <Input
                id="manualDtc"
                value={manualDtc}
                onChange={(e) => setManualDtc(e.target.value.toUpperCase())}
                placeholder="P0XXX"
                maxLength="5"
                className={errors.manualDtc ? "border-red-500" : ""}
              />
              {errors.manualDtc && (
                <p className="text-red-500 text-sm">{errors.manualDtc}</p>
              )}
            </div>

            <Button onClick={addManualDtc} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Agregar Código DTC
            </Button>
          </CardContent> */}
        {/* </Card> */}
      </div>

      {/* Lista de datos del escáner */}
      <Card>
        <CardHeader>
          <CardTitle>Datos Importados del Escáner</CardTitle>
          <CardDescription>
            {scannerData.length} archivo{scannerData.length !== 1 ? "s" : ""}{" "}
            procesado
            {scannerData.length !== 1 ? "s" : ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {scannerData.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No hay datos del escáner. Sube un archivo o ingresa códigos
              manualmente.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Archivo</th>
                    <th className="text-left p-2">Fecha</th>
                    <th className="text-left p-2">Escáner</th>
                    <th className="text-left p-2">VIN</th>
                    <th className="text-left p-2">Códigos DTC</th>
                    <th className="text-left p-2">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {scannerData.map((scan) => (
                    <tr key={scan.id} className="border-b hover:bg-muted/50">
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          {scan.fileName}
                        </div>
                      </td>
                      <td className="p-2">{format(scan.uploadDate)}</td>
                      <td className="p-2">{scan.scannerType}</td>
                      <td className="p-2 font-mono text-sm">
                        {scan.vehicleVin || "No especificado"}
                      </td>
                      <td className="p-2">
                        <div className="flex gap-1 flex-wrap">
                          {scan.dtcCodes.map((code) => (
                            <Badge
                              key={code}
                              variant="outline"
                              className="font-mono text-xs"
                            >
                              {code}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="p-2">
                        <Badge
                          variant={
                            scan.status === "processed"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {scan.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

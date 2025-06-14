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
import { useCodesView } from "@/hooks/useCodesView";
import { Label } from "@radix-ui/react-label";
import { CheckCircle, Filter, Search } from "lucide-react";

export default function ScannerPage() {
  const { loading, searchTerm, setSearchTerm, filters, setFilters, dtcs } =
    useCodesView();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Interpretación de Códigos DTC</h2>
        <div className="flex gap-2">
          <Input
            placeholder="Buscar código DTC..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <Button variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros de Búsqueda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Select
              value={filters.severity || "all"}
              onValueChange={(value) =>
                setFilters({ ...filters, severity: value })
              }
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filtrar por gravedad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las gravedades</SelectItem>
                <SelectItem value="leve">Leve</SelectItem>
                <SelectItem value="moderada">Moderada</SelectItem>
                <SelectItem value="grave">Grave</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.category || "all"}
              onValueChange={(value) =>
                setFilters({ ...filters, category: value })
              }
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filtrar por categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="Motor">Motor</SelectItem>
                <SelectItem value="Combustible">Combustible</SelectItem>
                <SelectItem value="Emisiones">Emisiones</SelectItem>
                <SelectItem value="Refrigeración">Refrigeración</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setFilters({ severity: "all", category: "all" });
                setSearchTerm("");
              }}
            >
              Limpiar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Base de datos DTC */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dtcs
          .filter((dtc) => {
            const matchesSearch =
              !searchTerm ||
              dtc.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
              dtc.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSeverity =
              !filters.severity ||
              filters.severity === "all" ||
              dtc.severity === filters.severity;
            const matchesCategory =
              !filters.category ||
              filters.category === "all" ||
              dtc.category === filters.category;
            return matchesSearch && matchesSeverity && matchesCategory;
          })
          .map((dtc) => (
            <Card key={dtc.code} className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="font-mono text-lg">{dtc.code}</span>
                  <Badge
                    variant={
                      dtc.severity === "grave"
                        ? "destructive"
                        : dtc.severity === "moderada"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {dtc.severity}
                  </Badge>
                </CardTitle>
                <CardDescription>{dtc.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">Categoría:</Label>
                  <p className="text-sm">{dtc.category}</p>
                </div>

                <div>
                  <Label className="text-sm font-medium">
                    Causas Frecuentes:
                  </Label>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    {dtc.causes.map((cause, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-xs mt-1">•</span>
                        {cause.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Label className="text-sm font-medium">
                    Soluciones Sugeridas:
                  </Label>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    {dtc.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 mt-1 text-green-500" />
                        {solution.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}

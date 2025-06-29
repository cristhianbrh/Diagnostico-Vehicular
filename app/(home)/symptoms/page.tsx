"use client";

import FormSymptoms from "@/components/form/FormSymptoms";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSymptomsView } from "@/hooks/useSymptomsView";

import { Plus, Wrench } from "lucide-react";

export default function SymptomsPage() {
  const { symptoms, selectedSymptoms, setSelectedSymptoms } = useSymptomsView();
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Registro de Síntomas</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Formulario de síntomas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Registrar Nuevos Síntomas
            </CardTitle>
            <CardDescription>
              Complementa el diagnóstico con observaciones adicionales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormSymptoms
              selectedSymptoms={selectedSymptoms}
              setSelectedSymptoms={setSelectedSymptoms}
            />
          </CardContent>
        </Card>

        {/* Síntomas por categoría */}
        <Card>
          <CardHeader>
            <CardTitle>Síntomas por Categoría</CardTitle>
            <CardDescription>
              Catálogo de síntomas organizados por sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="Motor" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="Motor">Motor</TabsTrigger>
                <TabsTrigger value="Combustible">Combustible</TabsTrigger>
                <TabsTrigger value="Eléctrico">Eléctrico</TabsTrigger>
                <TabsTrigger value="Otros">Otros</TabsTrigger>
              </TabsList>

              {["Motor", "Combustible", "Eléctrico", "Otros"].map(
                (category) => (
                  <TabsContent
                    key={category}
                    value={category}
                    className="space-y-2"
                  >
                    {symptoms
                      .filter(
                        (s) =>
                          s.category === category ||
                          (category === "Otros" &&
                            !["Motor", "Combustible", "Eléctrico"].includes(
                              s.category
                            ))
                      )
                      .map((symptom) => (
                        <Card key={symptom.id} className="p-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium text-sm">
                                {symptom.name}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {symptom.description}
                              </p>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                if (!selectedSymptoms.includes(symptom.id)) {
                                  setSelectedSymptoms([
                                    ...selectedSymptoms,
                                    symptom.id,
                                  ]);
                                }
                              }}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </Card>
                      ))}
                  </TabsContent>
                )
              )}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

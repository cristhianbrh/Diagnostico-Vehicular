import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, CheckCircle, Clock, AlertTriangle } from "lucide-react";

interface VehicleStatsProps {
  stats: { totalDiags: number; pendientes: number; resueltos: number; graves: number };
}

// SRP: Solo muestra las estadísticas del vehículo
const VehicleStats: React.FC<VehicleStatsProps> = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <Wrench className="h-5 w-5 text-blue-500" />
          <div>
            <p className="text-sm text-muted-foreground">Total Diagnósticos</p>
            <p className="text-2xl font-bold">{stats.totalDiags}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <div>
            <p className="text-sm text-muted-foreground">Resueltos</p>
            <p className="text-2xl font-bold">{stats.resueltos}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-yellow-500" />
          <div>
            <p className="text-sm text-muted-foreground">Pendientes</p>
            <p className="text-2xl font-bold">{stats.pendientes}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <div>
            <p className="text-sm text-muted-foreground">Graves</p>
            <p className="text-2xl font-bold">{stats.graves}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default VehicleStats;

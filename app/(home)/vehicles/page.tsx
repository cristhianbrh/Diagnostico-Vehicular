import VehicleTable from "@/components/screens/vehicle-list/vehicle-table";
import { DiagnosticTypeContext } from "@/contexts/diagnostic-context";
import { UserContext } from "@/contexts/user-context";
import { VehicleContext } from "@/contexts/vehicle-context";

export default function VehiclesPage() {
  return <VehicleTable />;
}

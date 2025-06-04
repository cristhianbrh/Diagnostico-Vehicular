import { VEHICLE_MODES } from "@/constants/vehicle-mode";
import { DiagnosticTypeContext } from "@/contexts/diagnostic-context";
import { VehicleContext } from "@/contexts/vehicle-context";
import { Vehicle } from "@/generated/prisma";
import { AppStatus } from "@/types/app-status";
import axios from "axios";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { useContext, useState } from "react";

export function useVehicleManagement() {
    const {
        setVehicleMode,
        setVehicleForm,
        vehicleData, setVehicleData,
        selectedVehicle, setSelectedVehicle
    } = useContext(VehicleContext);

    const {
        diagnostics
    } = useContext(DiagnosticTypeContext);

    const [errors, setErrors] = useState({})

    function addVehicleSelect() {
        setVehicleMode(VEHICLE_MODES.ADD)
        setVehicleForm({})
        setErrors({})
    }

    function viewVehicleSelect(vehicle : Vehicle) {
        setSelectedVehicle(vehicle);
        setVehicleMode(VEHICLE_MODES.VIEW);
    }

    function editVehicleSelect(vehicle: Vehicle) {
        setSelectedVehicle(vehicle)
        setVehicleForm(vehicle)
        setVehicleMode("edit")
        setErrors({});
    }

    async function deleteVehicleAction(vehicle: Vehicle) {
        try {
            await axios.delete(`/api/vehicle/removeById`, {
                params: { id: vehicle.id }
            });
                setVehicleData(vehicleData.filter((v) => v.id !== vehicle.id));
            if (selectedVehicle && selectedVehicle.id === vehicle.id) {
                setVehicleMode(VEHICLE_MODES.LIST);
                setSelectedVehicle(null);
            }
        } catch (error) {
            setErrors({ vehicle: "Error al eliminar vehículo" });
        }
    }

    function getVehicleStatus (vehicle : Vehicle) : AppStatus {
        console.log("Vehicle");
        console.log(vehicle);
        const diags = diagnostics
            .filter((d) => d.vehicleId === vehicle.id)
            .sort((a, b) => b.fecha.getTime() - a.fecha.getTime())

        console.log("diags");
        console.log(diags);
        if (diags.length === 0) return { status: "sin-diagnosticos", color: "gray", icon: Clock }

        const lastDiag = diags[0]
        if (lastDiag.estado === "grave") return { status: "grave", color: "red", icon: AlertTriangle }
        if (lastDiag.estado === "pendiente") return { status: "pendiente", color: "yellow", icon: Clock }
        if (lastDiag.estado === "resuelto") return { status: "ok", color: "green", icon: CheckCircle }

        return { status: "desconocido", color: "gray", icon: Clock }
    }

    return {
        addVehicleSelect,
        vehicleData, setVehicleData,
        getVehicleStatus,
        viewVehicleSelect,
        editVehicleSelect,
        deleteVehicleAction
    }
}
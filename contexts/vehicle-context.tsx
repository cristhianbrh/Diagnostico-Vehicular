import { VEHICLE_MODES, VehicleModes } from "@/constants/vehicle-mode";
import { Vehicle } from "@/generated/prisma";
import { createContext, Dispatch, SetStateAction } from "react"

type VehicleContextType = {
    vehicleMode: VehicleModes
    setVehicleMode: Dispatch<SetStateAction<VehicleModes>>,
    vehicleForm: any
    setVehicleForm: Dispatch<SetStateAction<any>>,
    vehicleData: Vehicle[],
    setVehicleData: Dispatch<SetStateAction<Vehicle[]>>,
    selectedVehicle: Vehicle | null,
    setSelectedVehicle: Dispatch<SetStateAction<Vehicle | null>>
}

export const VehicleContext = createContext<VehicleContextType>({
    vehicleMode: VEHICLE_MODES.LIST,
    setVehicleMode: () => {},
    vehicleForm: null,
    setVehicleForm: () => {},
    vehicleData: [],
    setVehicleData: () => {},
    selectedVehicle: null,
    setSelectedVehicle: () => {},
});
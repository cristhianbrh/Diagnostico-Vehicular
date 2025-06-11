import { ApiResponse } from "@/types/custom-response";
import { VehicleCreate, VehicleUpdate } from "@/types/vehicle";

export interface IVehicleService {
    createVehicle(vehicle: VehicleCreate): Promise<ApiResponse<VehicleCreate>>;
    updateById(vehicle: VehicleUpdate): Promise<ApiResponse<VehicleCreate>>;
    removeById(id: number): Promise<ApiResponse<VehicleCreate>>;
}
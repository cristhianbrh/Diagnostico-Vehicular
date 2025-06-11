import { ApiResponse } from "@/types/custom-response";
import { VehicleCreate } from "@/types/vehicle";

export interface IVehicleService {
    createVehicle(vehicle: VehicleCreate): Promise<ApiResponse<VehicleCreate>>;
    updateById(vehicle: VehicleCreate): Promise<ApiResponse<VehicleCreate>>;
    removeById(id: number): Promise<ApiResponse<VehicleCreate>>;
}
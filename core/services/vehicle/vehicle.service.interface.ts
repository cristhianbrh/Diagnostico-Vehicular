import { Vehicle } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { VehicleCreate, VehicleSummary, VehicleUpdate } from "@/types/vehicle.type";

export interface IVehicleService {
    createVehicle(vehicle: VehicleCreate): Promise<ApiResponse<Vehicle>>;
    getAll(): Promise<ApiResponse<VehicleSummary[]>>;
    updateById(vehicle: VehicleUpdate): Promise<ApiResponse<Vehicle>>;
    removeById(id: number): Promise<ApiResponse<Vehicle>>;
}
import { Vehicle } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response";
import { VehicleCreate, VehicleUpdate } from "@/types/vehicle";

export interface IVehicleService {
    createVehicle(vehicle: VehicleCreate): Promise<ApiResponse<Vehicle>>;
    updateById(vehicle: VehicleUpdate): Promise<ApiResponse<Vehicle>>;
    removeById(id: number): Promise<ApiResponse<Vehicle>>;
}
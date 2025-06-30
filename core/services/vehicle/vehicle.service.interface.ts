import { Vehicle } from "@/generated/prisma";
import { ApiResponse } from "@/types/custom-response.type";
import { VehicleCreate, VehicleDiagnosticDtcSummary, VehicleForTableSummary, VehicleSummary, VehicleUpdate } from "@/types/vehicle.type";

export interface IVehicleService {
    createVehicle(vehicle: VehicleCreate): Promise<ApiResponse<Vehicle>>;
    getById(id: number): Promise<ApiResponse<VehicleSummary>>
    getAll(): Promise<ApiResponse<VehicleSummary[]>>;
    updateById(vehicle: VehicleUpdate): Promise<ApiResponse<Vehicle>>;
    removeById(id: number): Promise<ApiResponse<Vehicle>>;
    getTotalById(id: number): Promise<ApiResponse<VehicleDiagnosticDtcSummary>>
    getAllForTable(): Promise<ApiResponse<VehicleForTableSummary[]>>
}
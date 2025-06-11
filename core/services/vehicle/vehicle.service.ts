import { ApiResponse } from "@/types/custom-response";
import { IVehicleService } from "./vehicle.service.interface";
import { VehicleCreate, VehicleUpdate } from "@/types/vehicle";
import axios from "axios";
import { parseError } from "@/lib/utils";
import { appUrl } from "@/constants/url-app";
import { Vehicle } from "@/generated/prisma";

export class VehicleService implements IVehicleService {

    public async createVehicle(vehicle: VehicleCreate): Promise<ApiResponse<Vehicle>> {
        try {
            const { data: response } = await axios.post<ApiResponse<Vehicle>>(`${appUrl}/api/vehicle/create`, vehicle);
            return response;
        }
        catch (error: any) {
            if(axios.isAxiosError(error)) {
                return error.response?.data;
            }
            return { error: parseError(error) };
        }
    }

    public async updateById(vehicle: VehicleUpdate): Promise<ApiResponse<Vehicle>> {
        try {
            const { data: response } = await axios.put<ApiResponse<Vehicle>>(`${appUrl}/api/vehicle/updateById`, vehicle);
            return response;
        }
        catch (error: any) {
            if(axios.isAxiosError(error)) {
                return error.response?.data;
            }
            return { error: parseError(error) };
        }
    }

    public async removeById(id: number): Promise<ApiResponse<Vehicle>> {
        try {
            const { data: response } = await axios.delete<ApiResponse<Vehicle>>(`${appUrl}/api/vehicle/removeById?id=${id}`);
            return response;
        }
        catch (error: any) {
            return { error: parseError(error) };
        }
    }
}
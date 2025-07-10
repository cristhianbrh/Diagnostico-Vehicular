import { ApiResponse } from "@/types/custom-response.type";
import { IVehicleService } from "./vehicle.service.interface";
import {
  VehicleCreate,
  VehicleDiagnosticDtcSummary,
  VehicleForTableSummary,
  VehicleSummary,
  VehicleUpdate,
} from "@/types/vehicle.type";
import axios from "axios";
import { parseError } from "@/lib/utils";
import { Vehicle } from "@/generated/prisma";

export class VehicleService implements IVehicleService {
  public async createVehicle(
    vehicle: VehicleCreate
  ): Promise<ApiResponse<Vehicle>> {
    try {
      const { data: response } = await axios.post<ApiResponse<Vehicle>>(
        `${process.env.API_URL}/api/vehicle/create`,
        vehicle
      );
      return response;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
      return { error: parseError(error) };
    }
  }

  public async getAllForTable(): Promise<ApiResponse<VehicleForTableSummary[]>> {
    try {
      const { data: response } = await axios.get<ApiResponse<VehicleForTableSummary[]>>(
        `/api/vehicle/get/forTable`
      );
      return response;
    } catch (error: any) {
      return { error: parseError(error) };
    }
  }
  public async getAll(): Promise<ApiResponse<VehicleSummary[]>> {
    try {
      const { data: response } = await axios.get<ApiResponse<VehicleSummary[]>>(
        `/api/vehicle/getAll`
      );
      return response;
    } catch (error: any) {
      return { error: parseError(error) };
    }
  }

  public async getById(id: number): Promise<ApiResponse<VehicleSummary>> {
    try {
      const { data: response } = await axios.get<ApiResponse<VehicleSummary>>(
        `${process.env.API_URL || ""}/api/vehicle/getById?id=${id}`
      );
      return response;
    } catch (error: any) {
      return { error: parseError(error) };
    }
  }
  public async getTotalById(id: number): Promise<ApiResponse<VehicleDiagnosticDtcSummary>> {
    try {
      const { data: response } = await axios.get<ApiResponse<VehicleDiagnosticDtcSummary>>(
        `${process.env.API_URL || ""}/api/vehicle/getById?id=${id}`
      );
      return response;
    } catch (error: any) {
      return { error: parseError(error) };
    }
  }

  public async updateById(
    vehicle: VehicleUpdate
  ): Promise<ApiResponse<Vehicle>> {
    try {
      const { data: response } = await axios.put<ApiResponse<Vehicle>>(
        `${process.env.API_URL || ""}/api/vehicle/updateById`,
        vehicle
      );
      return response;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
      return { error: parseError(error) };
    }
  }

  public async removeById(id: number): Promise<ApiResponse<Vehicle>> {
    try {
      const { data: response } = await axios.delete<ApiResponse<Vehicle>>(
        `${process.env.API_URL}/api/vehicle/removeById?id=${id}`
      );
      return response;
    } catch (error: any) {
      return { error: parseError(error) };
    }
  }
}

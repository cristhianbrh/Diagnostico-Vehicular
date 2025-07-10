import { ApiResponse } from "@/types/custom-response.type";
import { IDtcService } from "./dtc.service.interface";
import { Dtc, DtcCause, DtcSolution } from "@/generated/prisma";
import axios from "axios";
import { parseError } from "@/lib/utils";
import { DtcSummary } from "@/types/dtc.type";

export class DtcService implements IDtcService {
  public async getAll(): Promise<
    ApiResponse<DtcSummary[]>
  > {
    try {
      const { data: response } = await axios.get<
        ApiResponse<DtcSummary[]>
      >(`${process.env.API_URL || ""}/api/dtc/getAll`);
      return response;
    } catch (error) {
      return { error: parseError(error) };
    }
  }
}

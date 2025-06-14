import { ApiResponse } from "@/types/custom-response.type";
import { IDtcService } from "./dtc.service.interface";
import { Dtc, DtcCause, DtcSolution } from "@/generated/prisma";
import axios from "axios";
import { parseError } from "@/lib/utils";

export class DtcService implements IDtcService {
  public async getAll(): Promise<
    ApiResponse<(Dtc & { solutions: DtcSolution[]; causes: DtcCause[] })[]>
  > {
    try {
      const { data: response } = await axios.get<
        ApiResponse<(Dtc & { solutions: DtcSolution[]; causes: DtcCause[] })[]>
      >(`${process.env.API_URL || ""}/api/dtc/getAll`);
      return response;
    } catch (error) {
      return { error: parseError(error) };
    }
  }
}

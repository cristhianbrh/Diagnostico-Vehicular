// import { ScannerService } from "@/core/services/scanner/scanner.service";
import { container } from "@/core/di";
import { IDtcService } from "@/core/services/dtc/dtc.service.interface";
import { Dtc, DtcCause, DtcSolution } from "@/generated/prisma";
import { DtcSummary } from "@/types/dtc.type";
import { getAccessTokenData, IAccessToken } from "@/utils/cookies";
import axios from "axios";
import { set } from "date-fns";
import { useEffect, useMemo, useRef, useState } from "react";
import "reflect-metadata";

export function useCodesView() {
  const [filters, setFilters] = useState({ severity: "all", category: "all" });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [dtcs, setDtc] = useState<
    DtcSummary[]
  >([]);
  const [errors, setErrors] = useState({
    dtc: "",
  });
  const dtcService = useMemo(() => container.resolve<IDtcService>("IDtcService"), []);

  const getAllDtc = async () => {
    const { data: dtcs, error } = await dtcService.getAll();
    try {
      console.log(dtcs);
      setDtc(dtcs || []);
    } catch (catchError) {
      setErrors({ dtc: error || "" });
    }
  };
  useEffect(() => {
    getAllDtc();
  }, []);

  return {
    loading,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    dtcs,
  };
}

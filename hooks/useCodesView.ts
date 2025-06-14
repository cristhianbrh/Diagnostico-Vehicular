// import { ScannerService } from "@/core/services/scanner/scanner.service";
import { DtcService } from "@/core/services/dtc/dtc.service";
import { Dtc, DtcCause, DtcSolution } from "@/generated/prisma";
import { getAccessTokenData, IAccessToken } from "@/utils/cookies";
import axios from "axios";
import { set } from "date-fns";
import { useEffect, useRef, useState } from "react";
import "reflect-metadata";

export function useCodesView() {
  const [filters, setFilters] = useState({ severity: "all", category: "all" });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [dtcs, setDtc] = useState<
    (Dtc & { solutions: DtcSolution[]; causes: DtcCause[] })[]
  >([]);
  const [errors, setErrors] = useState({
    dtc: "",
  });
  const dtcService = new DtcService();

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

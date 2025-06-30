import { Dtc, DtcCause, DtcSolution } from "@/generated/prisma";

export type DtcSummary = (Dtc & { solutions: DtcSolution[]; causes: DtcCause[] })
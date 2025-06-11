import { ScannerFile } from "@/generated/prisma";
import { InputJsonValue } from "@/generated/prisma/runtime/library";

export type ScannerFileCreate = Pick<
    ScannerFile, "fileName" | "uploadDate" | "vehicleVin" | "scannerType" | "status"
> & Omit<ScannerFile, "id"> & { rawData: InputJsonValue }
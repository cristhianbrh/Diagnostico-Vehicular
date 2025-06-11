import { CsvScannerReader } from "@/lib/scanner-reader/csv-scanner-reader";
import { JsonScannerReader } from "@/lib/scanner-reader/json-scanner-reader";


describe("Scanner reader", () => {
    it("should read a json file", async () => {
        const reader = new JsonScannerReader("tests/scanner-files/scantest_000.json");
        const data = reader.getScannerFileData();

        expect(data.fileName).toBe("scantest_000.json");
        expect(data.uploadDate).toBeDefined();
        expect(data.vehicleVin).toBe("WS123456789456878");
        expect(data.scannerType).toBe("Autel");
        expect(data.status).toBe("processed");
    });

    it("should read a csv file", async () => {
        const reader = new CsvScannerReader("tests/scanner-files/scantest_000.csv");
        const data = reader.getScannerFileData();

        expect(data.fileName).toBe("scantest_000.csv");
        expect(data.uploadDate).toBeDefined();
        expect(data.vehicleVin).toBe("WS123456789456878");
        expect(data.scannerType).toBe("Autel");
        expect(data.status).toBe("processed");
    });
});

import { IScannerService } from "@/core/services/scanner/scanner.service.interface";
import { container } from "tsyringe";

const service = container.resolve<IScannerService>("IScannerService");

describe("Get scanner files", () => {
    it("should get scanner files", async () => {
        const { data: response } = await service.getAll();

        expect(response?.length).toBeGreaterThan(0);
        expect(response?.length).toBe(2);
        expect(response?.[0].fileName).toBe("scan_001.json");
    });
});

describe("Upload scanner files", () => {

    let idsToRemove: number[] = [];

    it("should upload a scanner json file", async () => {
        const { data: id } = await service.upload("tests/scanner-files/scantest_000.json");

        expect(id).toBeDefined();

        idsToRemove.push(id!);
    });

    it("should upload a scanner csv file", async () => {
        const { data: id } = await service.upload("tests/scanner-files/scantest_000.csv");

        expect(id).toBeDefined();
        
        idsToRemove.push(id!);
    });

    afterAll(async () => {
        Promise.all(idsToRemove.map(id => service.removeById(id)));
    });
});
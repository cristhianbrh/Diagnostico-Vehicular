import { IDtcService } from "@/core/services/dtc/dtc.service.interface";
import { container } from "tsyringe";

const service = container.resolve<IDtcService>("IDtcService");

describe("Get DTCs", () => {
    it("should get DTCs", async () => {
        const response = await service.getAll();
        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
        expect(response.data?.length).toBe(5);
        expect(response.data?.[0].code).toBe("P0128");
    });
}); 
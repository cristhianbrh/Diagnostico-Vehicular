import { ISymptomService } from "@/core/services/symptom/symptom.service.interface";
import { container } from "tsyringe";

const service = container.resolve<ISymptomService>("ISymptomService");

describe("Get all symptoms", () => {
    it("should get all symptoms", async () => {
        const { data: symptoms } = await service.getAll();

        expect(symptoms).toBeDefined();
        expect(symptoms?.length).toBeGreaterThan(0);
        expect(symptoms?.at(0)?.id).toBeDefined();
        expect(symptoms?.at(0)?.name).toBe("Ralentí irregular");
    });
});
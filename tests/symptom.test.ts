import { ISymptomService } from "@/core/services/symptom/symptom.service.interface";
import { PrismaClient } from "@/generated/prisma";
import { container } from "tsyringe";

const service = container.resolve<ISymptomService>("ISymptomService");
const prisma = new PrismaClient();
describe("Get all symptoms", () => {
    it("should get all symptoms", async () => {
        const { data: symptoms } = await service.getAll();

        expect(symptoms).toBeDefined();
        expect(symptoms?.length).toBeGreaterThan(0);
        expect(symptoms?.at(0)?.id).toBeDefined();
        expect(symptoms?.at(0)?.name).toBe("Ralentí irregular");
    });
});

describe("Update symptoms", () => {
    it("should update symptoms", async () => {
        const { data: updated } = await service.updateSymtoms({
            diagnosticId: 1,
            symptomsIds: [10],
            aditionalSymptom: "Test aditional symptom wa",
            noteTecnic: "Test note tecnic sym wa"
        });

        expect(updated).toBeDefined();
        expect(updated?.id).toBe(1);
        expect(updated?.aditionalSymptom).toBe("Test aditional symptom wa");
        expect(updated?.noteTecnicSym).toBe("Test note tecnic sym wa");
        
        const diagnosticSymptomRelation = await prisma.diagnosticSymptom.findFirst({
            where: {
                symptomId: 10,
            }
        });

        expect(diagnosticSymptomRelation?.diagnosticId).toBe(1);
    });

    afterAll(async () => {
        await service.updateSymtoms({
            diagnosticId: 1,
            symptomsIds: [],
            aditionalSymptom: "Test aditional symptom",
            noteTecnic: "Test note tecnic sym"
        });

        await prisma.diagnosticSymptom.delete({
            where: {
                diagnosticId_symptomId: {
                    diagnosticId: 1,
                    symptomId: 10
                }
            }
        });
    });
});
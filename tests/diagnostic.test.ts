import { IDiagnosticService } from "@/core/services/diagnostic/diagnostic.service.interface";
import { PrismaClient } from "@/generated/prisma";
import { container } from "tsyringe";

const service = container.resolve<IDiagnosticService>("IDiagnosticService");
const prisma = new PrismaClient();

describe("Create diagnostic", () => {

    const idsToRemove : number[] = [];

    it("should create a diagnostic", async () => {
        const { data: diagnostic } = await service.create({
            vehicleId: 1,
            fecha: new Date(),
            desc: "Test diagnostic",
            tecnico: "Test tecnico",
            estado: "resuelto",
            detalles: "Test detalles",
            cost: 100,
            duration: 10,
            scannerFileId: 1,
            dtcCodes: ["P0442", "P0171"],
        });

        expect(diagnostic).toBeDefined();
        expect(diagnostic?.id).toBeDefined();
        expect(diagnostic?.vehicleId).toBe(1);
        expect(diagnostic?.desc).toBe("Test diagnostic");
        expect(diagnostic?.tecnico).toBe("Test tecnico");
        expect(diagnostic?.estado).toBe("resuelto");
        expect(diagnostic?.detalles).toBe("Test detalles");
        expect(diagnostic?.cost).toBe(100);
        expect(diagnostic?.duration).toBe(10);
        expect(diagnostic?.scannerFileId).toBe(1);

        idsToRemove.push(diagnostic!.id);
    });

    it("should not create a diagnostic with invalid data", async () => {
        const { data: diagnostic, error } = await service.create({
            vehicleId: 100,
            fecha: new Date(),
            desc: "Test diagnostic",
            tecnico: "Test tecnico",
            estado: "resuelto",
            detalles: "Test detalles",
            cost: 100,
            duration: 10,
            scannerFileId: 1,
            dtcCodes: ["P0", "P0333"],
        });

        const id = diagnostic?.id;

        id && idsToRemove.push(id);

        expect(error).toBeDefined();
    });

    afterAll(async () => {
        Promise.all(idsToRemove.map(async (id) => {
            prisma.diagnostic.delete({ where: { id } });
        }));
    });
});

describe("Get all diagnostics", () => {
    it("should get all diagnostics", async () => {
        const { data: diagnostics } = await service.getAll();

        expect(diagnostics).toBeDefined();
        expect(diagnostics?.length).toBeGreaterThan(0);
        expect(diagnostics?.at(0)?.id).toBeDefined();
        expect(diagnostics?.at(0)?.vehicleId).toBe(1);
    });
});

describe("Solution diagnostic", () => {
    const idsToRemove : number[] = [];

    it("should solution a diagnostic", async () => {
        const { data: diagnostic } = await service.create({
            vehicleId: 2,
            fecha: new Date(),
            desc: "Another test diagnostic",
            tecnico: "Test tecnico",
            estado: "en espera",
            detalles: "Test detalles",
            cost: 12,
            duration: 14,
            scannerFileId: 2,
            dtcCodes: ["P0301"],
        });

        expect(diagnostic?.id).toBeDefined();

        idsToRemove.push(diagnostic!.id);

        const { data: updated } = await service.solutionDiagnostic({
            id: diagnostic!.id,
            solutionText: "Test solution text"
        });

        expect(updated).toBeDefined();
        expect(updated?.id).toBe(diagnostic?.id);
        expect(updated?.solutionText).toBe("Test solution text");
    });

    afterAll(async () => {
        Promise.all(idsToRemove.map(async (id) => {
            prisma.diagnostic.delete({ where: { id } });
        }));
    });
});

describe("Update diagnostic", () => {

    it("should update a diagnostic", async () => {

        const { data: updated } = await service.updateById({
            id: 1,
            desc: "Test diagnostic 1 updated",
            detalles: "Test detalles updated"
        });

        expect(updated).toBeDefined();
        expect(updated?.desc).toBe("Test diagnostic 1 updated");
        expect(updated?.detalles).toBe("Test detalles updated");
    });

    afterAll(async () => {
        await service.updateById({
            id: 1,
            desc: "Test diagnostic 1",
            detalles: "Test detalles"
        });
    });
});
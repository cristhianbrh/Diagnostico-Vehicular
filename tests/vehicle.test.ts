import { IVehicleService } from "@/core/services/vehicle/vehicle.service.interface";
import { container } from "tsyringe";

const service = container.resolve<IVehicleService>("IVehicleService");

describe("Create vehicle", () => {
    const vehiclesCreated: number[] = [];
    it("should create a vehicle, happy path", async () => {
        const response = await service.createVehicle({
            marca: "Toyota",
            modelo: "KLL-48546",
            year: 2019,
            motor: "electricidad",
            vin: "KI123906589456878",
            patente: "987654825",
            km: 56,
            userId: 2,
        });

        expect(response.data).toBeDefined();

        vehiclesCreated.push(response.data!.id!);
    });

    it("should create a vehicle, with errors", async () => {
        const response = await service.createVehicle({
            marca: "a",
            modelo: "KLL-48546",
            year: 1600,
            motor: "electricidad",
            vin: "0",
            patente: "987654825",
            km: -5,
            userId: 2,
        });

        expect(response.error).toBeDefined();

        expect(response.fields?.marca).toBeDefined();
        expect(response.fields?.year).toBeDefined();
        expect(response.fields?.vin).toBeDefined();
        expect(response.fields?.km).toBeDefined();
    });

    afterAll(async () => 
        await Promise.all(vehiclesCreated.map(id => service.removeById(id)))
    );
});
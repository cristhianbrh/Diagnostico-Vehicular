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

describe("Update vehicle", () => {
    it("should update a vehicle, happy path with some fields", async () => {

        const updatedResponse = await service.updateById({
            id: 1,
            marca: "Toyota",
            km: 56
        });

        expect(updatedResponse.data).toBeDefined();
        expect(updatedResponse.data!.marca).toBe("Toyota");
        expect(updatedResponse.data!.km).toBe(56);
    });

    it("should update a vehicle, with errors", async () => {
        const updatedResponse = await service.updateById({
            marca: "f",
            year: 2030,
            vin: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            km: -200,
        });

        expect(updatedResponse.error).toBeDefined();

        expect(updatedResponse.fields?.id).toBeDefined();
        expect(updatedResponse.fields?.marca).toBeDefined();
        expect(updatedResponse.fields?.year).toBeDefined();
        expect(updatedResponse.fields?.vin).toBeDefined();
        expect(updatedResponse.fields?.km).toBeDefined();
    });

    afterAll(async () => 
        await service.updateById({
            id: 1,
            marca: "Mercedes",
            km: 100
        })
    );
});

describe("Remove vehicle", () => {
    let idToRemove : number | null | undefined;

    beforeAll(async () => {
        const { data: vehicleToRemove } = await service.createVehicle({
            marca: "Borrable",
            modelo: "KLL-48546",
            year: 2012,
            motor: "electricidad",
            vin: "56ADSCQXXAD1245AD",
            patente: "987621345",
            km: 150,
            userId: 2,
        });

        expect(vehicleToRemove?.id).toBeDefined();
        idToRemove = vehicleToRemove?.id;
    });

    it("should remove a vehicle, with errors", async () => {
        const deleteResponse = await service.removeById(0);
        expect(deleteResponse.error).toBeDefined();
    });

    it("should remove a vehicle", async () => {
        const deleteResponse = await service.removeById(idToRemove!);
        expect(deleteResponse.data).toBeDefined();
        expect(deleteResponse.data!.marca).toBe("Borrable");

    });

    afterAll(async () => 
        idToRemove && await service.removeById(idToRemove)
    );
});
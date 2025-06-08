import { IAuthService } from "@/core/services/auth/auth.service.interface";
import { PrismaClient } from "@/generated/prisma";
import { container } from "tsyringe";

const prisma = new PrismaClient();
const service = container.resolve<IAuthService>("IAuthService");
describe("Login user", () => {
    it("should login a user", async () => {
        const [goodResponse, badPasswordResponse, userNotFoundResponse] = await Promise.all([
            service.login("juan@gmail.com", "123456789"),
            service.login("juan@gmail.com", "*****"),
            service.login("4123123@gmail.com", "45458")
        ]);
        
        expect(badPasswordResponse.error).toBe("Credenciales inválidas");
        expect(userNotFoundResponse.error).toBe("Usuario no encontrado o inactivo");
        expect(goodResponse.user).toBeDefined();
    });
});

describe("Register user", () => {
    const emailToCreate = "josepablo5534@gmail.com";
    it("should register a user", async () => {
        const response = await service.register({
            email: emailToCreate,
            password: "123456789",
            name: "Jose Pablo",
            role: "cliente",
        });

        expect(response.user).toBeDefined();
    });

    it("should not register a user with the same email", async () => {
        const response = await service.register({
            email: emailToCreate,
            password: "123456789",
            name: "Maria la del Carmen",
            role: "cliente",
        });

        expect(response.error).toBe("User already exists or error");
    });

    afterAll(async () => {
        await prisma.user.delete({ where: { email: emailToCreate } } );
    });
});
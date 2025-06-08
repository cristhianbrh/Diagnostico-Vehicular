import { AuthService } from "@/core/services/auth-service";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();
describe("Login user", () => {
    it("should login a user", async () => {
        const [goodResponse, badPasswordResponse, userNotFoundResponse] = await Promise.all([
            AuthService.login("juan@gmail.com", "123456789"),
            AuthService.login("juan@gmail.com", "*****"),
            AuthService.login("4123123@gmail.com", "45458")
        ]);
        
        expect(badPasswordResponse.error).toBe("Credenciales inválidas");
        expect(userNotFoundResponse.error).toBe("Usuario no encontrado o inactivo");
        expect(goodResponse.user).toBeDefined();
    });
});

describe("Register user", () => {
    const emailToCreate = "josepablo5534@gmail.com";
    it("should register a user", async () => {
        const response = await AuthService.register({
            email: emailToCreate,
            password: "123456789",
            name: "Jose Pablo",
            role: "cliente",
        });

        expect(response.user).toBeDefined();
    });

    it("should not register a user with the same email", async () => {
        const response = await AuthService.register({
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
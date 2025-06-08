import { IUserService } from "@/core/services/user/user.service.interface";
import { container } from "tsyringe";

const service = container.resolve<IUserService>("IUserService");

describe("Get users", () => {
    it("should get users", async () => {
        let users = await service.getUsers();
        expect(users.length).toBeGreaterThan(0);
        
        users = await service.getUsers({limit: 1});
        expect(users.length).toBe(1);

        users = await service.getUsers({offset: 1});
        expect(users.length).toBe(1);
    });

    it("should get user name by id", async () => {
        const user = await service.getUserName(1);
        expect(user).toBe("Juan");
    });
});

describe("Update user", () => {
    it("should update an user", async () => {

        //* First user in the seed
        const updatedUser : any = await service.updateUser(1, {
            name: "Juan Pablo",
            role: "cliente"
        });

        expect(updatedUser.error).toBeUndefined(); 

        expect(updatedUser.name).toBe("Juan Pablo");
    });

    afterAll(async () => {
        await service.updateUser(1, {
            name: "Juan",
            role: "admin"
        });
    });
});
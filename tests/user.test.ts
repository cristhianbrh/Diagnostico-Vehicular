import { IUserService } from "@/core/services/user/user.service.interface";
import { container } from "tsyringe";

const service = container.resolve<IUserService>("IUserService");

describe("Get users", () => {
    it("should get users", async () => {
        let response = await service.getUsers();
        expect(response.data?.length).toBeGreaterThan(0);
        
        response = await service.getUsers({limit: 1});
        expect(response.data?.length).toBe(1);

        response = await service.getUsers({offset: 1});
        expect(response.data?.length).toBe(1);
    });

    it("should get user name by id", async () => {
        const {data:user} = await service.getUserName(1);
        expect(user).toBe("Juan");
    });
});

describe("Update user", () => {
    it("should update an user", async () => {

        //* First user in the seed
        const {data: updatedUser, error} = await service.updateUser(1, {
            name: "Juan Pablo",
            role: "cliente"
        });

        expect(error).toBeUndefined(); 

        expect(updatedUser?.name).toBe("Juan Pablo");
    });

    afterAll(async () => {
        await service.updateUser(1, {
            name: "Juan",
            role: "admin"
        });
    });
});
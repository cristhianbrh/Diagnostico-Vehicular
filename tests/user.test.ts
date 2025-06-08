import { UserService } from "@/core/services/user-service";

describe("Get users", () => {
    it("should get users", async () => {
        let users = await UserService.getUsers();
        expect(users.length).toBeGreaterThan(0);
        
        users = await UserService.getUsers({limit: 1});
        expect(users.length).toBe(1);

        users = await UserService.getUsers({offset: 1});
        expect(users.length).toBe(1);
    });

    it("should get user name by id", async () => {
        const user = await UserService.getUserName(1);
        expect(user).toBe("Juan");
    });
});
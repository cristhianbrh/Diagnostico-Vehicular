import { UserContext } from "@/contexts/user-context";
import { useContext } from "react";

export function useUser() {
    const { users, setUsers } = useContext(UserContext);

    function getUserName(userId: number) : string {
        const user = users.find((u) => u.id === userId);
        return user ? user.name : "Usuario desconocido";
    }

    return {
        users,
        getUserName
    }
}
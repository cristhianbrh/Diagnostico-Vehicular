import { User } from "@/generated/prisma";
import { createContext, Dispatch, SetStateAction } from "react";

type UserContextType = {
    users: User[],
    setUsers: Dispatch<SetStateAction<User[]>>
}

export const UserContext = createContext<UserContextType>({
    users: [],
    setUsers: () => {}
}) 
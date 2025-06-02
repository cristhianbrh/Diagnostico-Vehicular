import { AUTH_MODES, AuthMode } from "@/constants/auth-mode";
import { User } from "@/generated/prisma";
import { createContext, Dispatch, SetStateAction } from "react";

type UserAuthContextType = {
    currentUser: User | null,
    setCurrentUser: Dispatch<SetStateAction<User | null>>,
    users: User[],
    setUsers: Dispatch<SetStateAction<User[]>>,
}

export const UserAuthContext = createContext<UserAuthContextType>({
    currentUser: null,
    setCurrentUser: () => {},
    users: [],
    setUsers: () => {},
});
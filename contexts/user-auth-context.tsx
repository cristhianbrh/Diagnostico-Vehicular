import { User } from "@/generated/prisma";
import { createContext, Dispatch, SetStateAction } from "react";

type UserAuthContextType = {
    currentUser: User | null,
    setCurrentUser: Dispatch<SetStateAction<User | null>>,
}

export const UserAuthContext = createContext<UserAuthContextType>({
    currentUser: null,
    setCurrentUser: () => {}
});
import { createContext, Dispatch, SetStateAction } from "react"

type LoadingContextType = {
    loading: boolean,
    setLoading:  Dispatch<SetStateAction<boolean>>
}

export const LoadingContext = createContext<LoadingContextType>({
    loading: false,
    setLoading: () => {}
})
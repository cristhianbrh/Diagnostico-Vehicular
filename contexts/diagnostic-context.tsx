// const [diagnostics, setDiagnostics] = useState<Diagnostic[]>([])

import { Diagnostic } from "@/generated/prisma"
import { createContext, Dispatch, SetStateAction } from "react"

type DiagnosticTypeContextType = {
    diagnostics: Diagnostic[],
    setDiagnostics: Dispatch<SetStateAction<Diagnostic[]>>
}

export const DiagnosticTypeContext = createContext<DiagnosticTypeContextType>({
    diagnostics: [],
    setDiagnostics: () => {}
});
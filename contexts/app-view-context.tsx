import { APP_VIEWS, AppViews } from "@/constants/app-views"
import { createContext, Dispatch, SetStateAction } from "react"

type AppViewContextType = {
    currentView : AppViews,
    setCurrentView : Dispatch<SetStateAction<AppViews>>
}

export const AppViewContext = createContext<AppViewContextType>({
    currentView: APP_VIEWS.VEHICLES,
    setCurrentView: () => {}
});
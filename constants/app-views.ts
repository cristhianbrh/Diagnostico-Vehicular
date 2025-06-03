export const APP_VIEWS = {
    VEHICLES: "vehicles",
    SCANNER: "scanner",
    DTC: "dtc",
    SYMPTOMS: "symptoms",
    SOLUTIONS: "solutions",
    USERS: "users",
    REPORTS: "reports",
    HELP: "help"
} as const

export type AppViews = (typeof APP_VIEWS)[keyof typeof APP_VIEWS];
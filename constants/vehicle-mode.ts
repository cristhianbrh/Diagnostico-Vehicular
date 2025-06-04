export const VEHICLE_MODES = {
    LIST: "list",
    ADD: "add",
    EDIT: "edit",
    VIEW: "view"
} as const

export type VehicleModes = (typeof VEHICLE_MODES)[keyof typeof VEHICLE_MODES];
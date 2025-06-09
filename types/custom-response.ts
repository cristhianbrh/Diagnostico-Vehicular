export type CustomResponse<T> = {
  [key: string]: T;
} & {
    error?: string;
    message?: string;
    fields?: Partial<Record<keyof T, string>>;
}
export type ApiResponse<T> = {
  data?: T | null;
  message?: string;
  error?: string;
  fields?: Partial<Record<keyof T, string>>;
  [key: string]: unknown;
}
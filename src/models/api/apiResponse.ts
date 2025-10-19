export type ApiWrapperSchema<T> = {
  status: "success" | "error";
  timestamp: string;
  message: string;
  data: T | null;
}
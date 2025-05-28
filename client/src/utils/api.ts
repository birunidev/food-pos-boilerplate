import { AxiosError } from "axios";
import { ErrorResponse } from "../config/api";

export const getResponseErrorMessage = (
  error: AxiosError<ErrorResponse>
): string => {
  return error.response?.data?.error?.message || "Internal Server Error";
};

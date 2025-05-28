import { AxiosError } from "axios";
import {
  LoginData,
  LoginResponse,
  performLogin,
} from "src/config/services/auth.service";
import { ErrorResponse } from "./api";
import { useMutation } from "@tanstack/react-query";
import { CreatedResource } from "./queries";
import { ICategory } from "src/types/category.types";
import { CategoryRequest, createCategory } from "./services/category.service";

/**
 * ==========================
 * AUTH MUTATOR
 * ==========================
 */
export const usePerformLogin = () => {
  return useMutation<
    LoginResponse,
    AxiosError<ErrorResponse>,
    LoginData,
    unknown
  >({
    mutationFn: (loginData: LoginData) => performLogin(loginData),
  });
};

/**
 * ==========================
 * CATEGORIES MUTATOR
 * ==========================
 */
export const useCreateCategory = () => {
  return useMutation<
    CreatedResource<ICategory>,
    AxiosError<ErrorResponse>,
    CategoryRequest
  >({
    mutationFn: (data: CategoryRequest) => createCategory(data),
  });
};

import { AxiosError } from "axios";
import {
  LoginData,
  LoginResponse,
  performLogin,
} from "src/config/services/auth.service";
import { ErrorResponse } from "./api";
import { useMutation } from "@tanstack/react-query";
import { JsonResource } from "./queries";
import { ICategory } from "src/types/category.types";
import {
  CategoryRequest,
  createCategory,
  deleteCategory,
  updateCategory,
} from "./services/category.service";

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
    JsonResource<ICategory>,
    AxiosError<ErrorResponse>,
    CategoryRequest
  >({
    mutationFn: (data: CategoryRequest) => createCategory(data),
  });
};

interface UpdateCategoryParams {
  id: string;
  data: CategoryRequest;
}

export const useUpdateCategory = () => {
  return useMutation<
    JsonResource<ICategory>,
    AxiosError<ErrorResponse>,
    UpdateCategoryParams
  >({
    mutationFn: ({ id, data }: UpdateCategoryParams) =>
      updateCategory(id, data),
  });
};

interface DeleteCategoryParams {
  id: string;
}

export const useDeleteCategory = () => {
  return useMutation<
    JsonResource<ICategory>,
    AxiosError<ErrorResponse>,
    DeleteCategoryParams
  >({
    mutationFn: ({ id }: DeleteCategoryParams) => deleteCategory(id),
  });
};

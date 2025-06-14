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
import { IProduct, Thumbnail } from "src/types/product.types";
import {
  createProduct,
  deleteProduct,
  ProductRequest,
  updateProduct,
} from "./services/product.service";
import { uploadFile } from "./services/file.service";
import {
  CheckoutRequest,
  createOrdersCheckout,
  ICheckoutResponse,
} from "./services/orders.service";

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
 * FILES MUTATOR
 * ==========================
 */
export const useUploadFile = () => {
  return useMutation<Thumbnail[], AxiosError<ErrorResponse>, FormData>({
    mutationFn: (data: FormData) => uploadFile(data),
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

/**
 * ==========================
 * PRODUCTS MUTATOR
 * ==========================
 */
export const useCreateProduct = () => {
  return useMutation<
    JsonResource<IProduct>,
    AxiosError<ErrorResponse>,
    ProductRequest
  >({
    mutationFn: (data: ProductRequest) => createProduct(data),
  });
};

interface UpdateProductParams {
  id: string;
  data: ProductRequest;
}

export const useUpdateProduct = () => {
  return useMutation<
    JsonResource<IProduct>,
    AxiosError<ErrorResponse>,
    UpdateProductParams
  >({
    mutationFn: ({ id, data }: UpdateProductParams) => updateProduct(id, data),
  });
};

interface DeleteProductParams {
  id: string;
}

export const useDeleteProduct = () => {
  return useMutation<
    JsonResource<IProduct>,
    AxiosError<ErrorResponse>,
    DeleteProductParams
  >({
    mutationFn: ({ id }: DeleteProductParams) => deleteProduct(id),
  });
};

/**
 * ==========================
 * ORDERS MUTATOR
 * ==========================
 */
export const useOrdersCheckoutCreate = () => {
  return useMutation<
    ICheckoutResponse,
    AxiosError<ErrorResponse>,
    CheckoutRequest
  >({
    mutationFn: (data: CheckoutRequest) => createOrdersCheckout(data),
  });
};

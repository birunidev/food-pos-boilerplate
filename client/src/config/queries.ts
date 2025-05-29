// /users/me

import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getMe } from "src/config/services/user.service";
import { IUser } from "src/types/user.types";
import { ErrorResponse } from "./api";
import { ICategory } from "src/types/category.types";
import {
  getCategories,
  getCategory,
  GetCategoryParams,
} from "./services/category.service";
import {
  getProduct,
  GetProductParams,
  getProducts,
} from "./services/product.service";
import { IProduct } from "src/types/product.types";

export interface PaginatedResources<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface JsonResource<T> {
  data: T;
  meta: object;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface QueryOptions<T extends Record<string, any>> {
  config?: { enabled?: boolean };
  params?: T;
}

export interface PaginationParams {
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}

/**
 * ==========================
 * AUTH QUERIES
 * ==========================
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useUsersMe = <T extends Record<string, any>>(
  options?: QueryOptions<T>
) => {
  return useQuery<IUser, AxiosError<ErrorResponse>>({
    queryKey: ["/users/me"],
    queryFn: () => getMe(),
    ...options?.config,
  });
};

/**
 * ==========================
 * CATEGORY QUERIES
 * ==========================
 */

export const useCategories = (options?: QueryOptions<GetCategoryParams>) => {
  return useQuery<PaginatedResources<ICategory>, AxiosError<ErrorResponse>>({
    queryKey: ["/categories", options?.params],
    queryFn: () => getCategories(options?.params),
    ...options?.config,
  });
};

export const useCategory = (options?: QueryOptions<GetCategoryParams>) => {
  return useQuery<JsonResource<ICategory>, AxiosError<ErrorResponse>>({
    queryKey: ["/categories/" + options.params.id],
    queryFn: () => getCategory(options.params.id, options?.params),
    ...options?.config,
  });
};

/**
 * ==========================
 * PRODUCT QUERIES
 * ==========================
 */

export const useProducts = (options?: QueryOptions<GetProductParams>) => {
  return useQuery<PaginatedResources<IProduct>, AxiosError<ErrorResponse>>({
    queryKey: ["/products", options?.params],
    queryFn: () => getProducts(options?.params),
    ...options?.config,
  });
};

export const useProduct = (options?: QueryOptions<GetProductParams>) => {
  return useQuery<JsonResource<IProduct>, AxiosError<ErrorResponse>>({
    queryKey: ["/products/" + options.params.id],
    queryFn: () => getProduct(options.params.id, options?.params),
    ...options?.config,
  });
};

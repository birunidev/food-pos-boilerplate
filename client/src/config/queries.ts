// /users/me

import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getMe } from "src/config/services/user.service";
import { IUser } from "src/types/user.types";
import { ErrorResponse } from "./api";
import { ICategory } from "src/types/category.types";
import { getCategories, GetCategoryParams } from "./services/category.service";

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

export interface CreatedResource<T> {
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
    queryKey: ["/categories"],
    queryFn: () => getCategories(options?.params),
  });
};

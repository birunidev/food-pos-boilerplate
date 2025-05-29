import { ICategory } from "src/types/category.types";
import { ApiClient } from "../api";
import { JsonResource, PaginatedResources, PaginationParams } from "../queries";

export interface GetCategoryParams extends PaginationParams {
  populate?: string;
  id?: string;
}

export interface CategoryRequest {
  name: string;
  slug: string;
  emoji: string;
}

export const getCategories = (params: GetCategoryParams) =>
  ApiClient<PaginatedResources<ICategory>>({
    method: "GET",
    url: "/categories",
    params,
  });

export const getCategory = (id: string, params: GetCategoryParams) =>
  ApiClient<JsonResource<ICategory>>({
    method: "GET",
    url: `/categories/${id}`,
    params,
  });

export const createCategory = (data: CategoryRequest) =>
  ApiClient<JsonResource<ICategory>>({
    method: "POST",
    url: "/categories",
    data: {
      data,
    },
  });

export const updateCategory = (id: string, data: CategoryRequest) =>
  ApiClient<JsonResource<ICategory>>({
    method: "PUT",
    url: `/categories/${id}`,
    data: {
      data,
    },
  });

export const deleteCategory = (id: string) =>
  ApiClient<JsonResource<ICategory>>({
    method: "DELETE",
    url: `/categories/${id}`,
  });

import { ICategory } from "src/types/category.types";
import { ApiClient } from "../api";
import {
  CreatedResource,
  PaginatedResources,
  PaginationParams,
} from "../queries";

export interface GetCategoryParams extends PaginationParams {
  populate?: string;
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

export const createCategory = (data: CategoryRequest) =>
  ApiClient<CreatedResource<ICategory>>({
    method: "POST",
    url: "/categories",
    data: {
      data,
    },
  });

import { IProduct } from "src/types/product.types";
import { JsonResource, PaginatedResources, PaginationParams } from "../queries";
import { ApiClient } from "../api";

export interface GetProductParams extends PaginationParams {
  populate?: string;
  id?: string;
  filters?: {
    category?: {
      id?: {
        $eq?: string;
      };
    };
  };
}

export interface ProductRequest {
  title: string;
  price: number;
  category: string;
  thumbnail?: number;
}

export const getProducts = (params: GetProductParams) =>
  ApiClient<PaginatedResources<IProduct>>({
    method: "GET",
    url: "/products",
    params,
  });

export const getProduct = (id: string, params: GetProductParams) =>
  ApiClient<JsonResource<IProduct>>({
    method: "GET",
    url: `/products/${id}`,
    params,
  });

export const createProduct = (data: ProductRequest) =>
  ApiClient<JsonResource<IProduct>>({
    method: "POST",
    url: "/products",
    data: {
      data,
    },
  });

export const updateProduct = (id: string, data: ProductRequest) =>
  ApiClient<JsonResource<IProduct>>({
    method: "PUT",
    url: `/products/${id}`,
    data: {
      data,
    },
  });

export const deleteProduct = (id: string) =>
  ApiClient<JsonResource<IProduct>>({
    method: "DELETE",
    url: `/products/${id}`,
  });

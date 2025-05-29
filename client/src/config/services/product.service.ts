import { IProduct } from "src/types/product.types";
import { JsonResource, PaginatedResources } from "../queries";
import { ApiClient } from "../api";

export interface GetProductParams {
  populate?: string;
  id?: string;
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
    url: `/categories/${id}`,
    params,
  });

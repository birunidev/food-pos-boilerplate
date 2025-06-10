import { Thumbnail } from "src/types/product.types";
import { ApiClient } from "../api";

export const uploadFile = (data: FormData) =>
  ApiClient<Thumbnail[]>({
    method: "POST",
    url: "/upload",
    data: data,
  });

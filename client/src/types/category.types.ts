import { IProduct } from "./product.types";

export interface ICategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  emoji: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
  products?: IProduct[];
}

import { ICategory } from "./category.types";

export type ThumbnailFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

export type Thumbnail = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: {
    thumbnail: ThumbnailFormat;
    small: ThumbnailFormat;
    large: ThumbnailFormat;
    medium: ThumbnailFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
};

export type IProduct = {
  id: number;
  documentId: string;
  title: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null | string;
  thumbnail: Thumbnail;
  category?: ICategory;
};

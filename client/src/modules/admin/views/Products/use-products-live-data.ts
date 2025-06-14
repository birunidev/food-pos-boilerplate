import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  getProductsQueryKey,
  PaginatedResources,
  useProducts,
} from "src/config/queries";
import {
  GetProductParams,
  getProducts,
} from "src/config/services/product.service";
import { IProduct } from "src/types/product.types";

const PAGE_SIZE = 7;
export const useProductsLiveData = (params?: GetProductParams) => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { data: productsData, isLoading } = useProducts({
    params: {
      populate: "*",
      pagination: { pageSize: PAGE_SIZE },
      ...params,
    },
  });

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const newData = await getProducts({
      pagination: { page: nextPage, pageSize: 8 },
      populate: "*",
    });

    await queryClient.setQueryData(
      getProductsQueryKey({
        pagination: { pageSize: PAGE_SIZE },
        populate: "*",
        ...params,
      }),
      (oldData: PaginatedResources<IProduct>) => ({
        ...oldData,
        data: [...oldData.data, ...newData.data],
        meta: {
          ...oldData.meta,
          ...newData.meta,
          pagination: {
            ...oldData.meta.pagination,
            ...newData.meta.pagination,
          },
        },
      })
    );

    setPage(nextPage);
  };

  return {
    productsData,
    isLoading,
    handleLoadMore,
    page,
  };
};

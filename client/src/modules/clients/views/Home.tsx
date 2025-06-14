import { useCategories } from "src/config/queries";
import CategoryItems from "../components/molecules/CategoryItems";
import MenuCards from "../components/molecules/MenuCards";
import BaseTemplate from "../components/templates/BaseTemplate";
import { useProductsLiveData } from "src/modules/admin/views/Products/use-products-live-data";
import Spinner from "src/components/atoms/Spinner";
import Button from "src/components/atoms/Button";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const { data: categoryData } = useCategories({
    params: { pagination: { pageSize: 100 } },
  });
  const [searchParams] = useSearchParams();

  const { productsData, isLoading, handleLoadMore, page } = useProductsLiveData(
    {
      pagination: { pageSize: 10 },
      filters: {
        category: {
          id: {
            $eq: searchParams.get("category"),
          },
        },
      },
    }
  );

  return (
    <BaseTemplate>
      <div className="space-y-4">
        <div className="custom-container">
          <p className="font-bold">Categories</p>
        </div>
        <CategoryItems categories={categoryData?.data} />
      </div>
      <div className="custom-container mt-6">
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <div className="xl:max-w-[75%]">
              <MenuCards products={productsData?.data} />
            </div>
            {productsData.meta.pagination.pageCount !== page && (
              <div className="text-center mt-12">
                <Button variant="warning" onClick={handleLoadMore}>
                  Load more
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </BaseTemplate>
  );
}

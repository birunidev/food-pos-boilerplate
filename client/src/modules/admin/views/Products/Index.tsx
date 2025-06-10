import AdminTemplate from "../../components/templates/AdminTemplate";
import AddMenuBtn from "../../components/atoms/AddMenuBtn";
import ProductCards from "../../components/molecules/ProductCards";
import Spinner from "src/components/atoms/Spinner";
import Button from "src/components/atoms/Button";
import { useProductsLiveData } from "./use-products-live-data";

export default function ProductIndex() {
  const { productsData, isLoading, handleLoadMore, page } =
    useProductsLiveData();

  return (
    <AdminTemplate
      title="Manage Menu"
      links={[
        { label: "Manage Menu", link: "/admin/products", isActive: false },
      ]}
    >
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {/* add button */}
            <AddMenuBtn />
            <ProductCards data={productsData?.data} />
          </div>
          {productsData.meta.pagination.pageCount !== page && (
            <div className="text-center">
              <Button variant="warning" onClick={handleLoadMore}>
                Load more
              </Button>
            </div>
          )}
        </>
      )}
    </AdminTemplate>
  );
}

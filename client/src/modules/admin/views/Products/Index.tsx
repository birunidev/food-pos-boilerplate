import AdminTemplate from "../../components/templates/AdminTemplate";
import AddMenuBtn from "../../components/atoms/AddMenuBtn";
import ProductCards from "../../components/molecules/ProductCards";
import { useProducts } from "src/config/queries";
import Spinner from "src/components/atoms/Spinner";

export default function ProductIndex() {
  const { data: productsData, isLoading } = useProducts({
    params: {
      populate: "*",
    },
  });

  return (
    <AdminTemplate
      title="Manage Menu"
      links={[
        { label: "Manage Menu", link: "/admin/products", isActive: false },
      ]}
    >
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {/* add button */}
          <AddMenuBtn />
          <ProductCards data={productsData?.data} />
        </div>
      )}
    </AdminTemplate>
  );
}

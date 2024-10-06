import AdminTemplate from "../../components/templates/AdminTemplate";
import AddMenuBtn from "../../components/atoms/AddMenuBtn";
import ProductCards from "../../components/molecules/ProductCards";

export default function ProductIndex() {
  return (
    <AdminTemplate
      title="Manage Menu"
      links={[
        { label: "Manage Menu", link: "/admin/products", isActive: false },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* add button */}
        <AddMenuBtn />
        <ProductCards />
      </div>
    </AdminTemplate>
  );
}

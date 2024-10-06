import AdminTemplate from "../../components/templates/AdminTemplate";
import ProductForm from "../../components/molecules/ProductForm";

export default function ManageProduct() {
  return (
    <AdminTemplate
      title="Manage Menu"
      links={[
        { label: "Manage Menu", link: "/admin/products", isActive: false },
        { label: "Add New Menu", link: "#", isActive: true },
      ]}
    >
      <ProductForm />
    </AdminTemplate>
  );
}

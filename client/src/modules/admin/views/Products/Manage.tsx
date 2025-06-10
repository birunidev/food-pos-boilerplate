import AdminTemplate from "../../components/templates/AdminTemplate";
import ProductForm from "../../components/molecules/ProductForm";
import { useParams } from "react-router-dom";
import { useProduct } from "src/config/queries";

export default function ManageProduct() {
  const params = useParams();

  const isEdit = !!params.id;

  const { data: productData } = useProduct({
    params: { id: params.id, populate: "*" },
    config: { enabled: isEdit },
  });

  return (
    <AdminTemplate
      title="Manage Menu"
      links={[
        { label: "Manage Menu", link: "/admin/products", isActive: false },
        {
          label: isEdit ? "Edit Menu" : "Add New Menu",
          link: "#",
          isActive: true,
        },
      ]}
    >
      <ProductForm product={productData?.data} />
    </AdminTemplate>
  );
}

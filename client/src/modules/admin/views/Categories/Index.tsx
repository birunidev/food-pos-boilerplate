import CategoryForm from "../../components/molecules/CategoryForm";
import CategoryTable from "../../components/molecules/CategoryTable";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { useCategory } from "src/config/queries";
import { useSearchParams } from "react-router-dom";

export default function CategoryIndex() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const { data: categoryData } = useCategory({
    params: {
      id: id || undefined,
    },
    config: {
      enabled: !!id,
    },
  });

  return (
    <AdminTemplate
      title="Manage Categories"
      links={[{ label: "Manage Categories", link: "#", isActive: true }]}
    >
      <div className="flex gap-8 flex-col md:flex-row justify-between items-stretch">
        <div className="md:w-1/3">
          <CategoryForm category={categoryData?.data ?? null} />
        </div>
        <div className="md:w-2/3">
          <CategoryTable />
        </div>
      </div>
    </AdminTemplate>
  );
}

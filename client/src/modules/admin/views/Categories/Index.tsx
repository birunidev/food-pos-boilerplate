import CategoryForm from "../../components/molecules/CategoryForm";
import CategoryTable from "../../components/molecules/CategoryTable";
import AdminTemplate from "../../components/templates/AdminTemplate";

export default function CategoryIndex() {
  return (
    <AdminTemplate
      title="Manage Categories"
      links={[{ label: "Manage Categories", link: "#", isActive: true }]}
    >
      <div className="flex gap-8 flex-col md:flex-row justify-between items-stretch">
        <div className="md:w-1/3">
          <CategoryForm />
        </div>
        <div className="md:w-2/3 min-h-[300px]">
          <CategoryTable />
        </div>
      </div>
    </AdminTemplate>
  );
}

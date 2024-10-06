import OrderCards from "src/components/organisms/OrderCards";
import OrderFilter from "../../components/molecules/OrderFilter";
import AdminTemplate from "../../components/templates/AdminTemplate";

export default function OrderIndex() {
  return (
    <AdminTemplate
      title="Manage Orders"
      links={[{ label: "Manage Orders", link: "#", isActive: true }]}
    >
      <OrderFilter />
      <OrderCards />
    </AdminTemplate>
  );
}

import Box from "src/components/atoms/Box";
import Button from "src/components/atoms/Button";
import FormSelect from "src/components/atoms/FormSelect";
import OrderDetail from "src/components/organisms/OrderDetail";
import AdminTemplate from "../../components/templates/AdminTemplate";
import OrderNo from "src/components/atoms/OrderNo";

export default function OrderShow() {
  return (
    <AdminTemplate
      title="Detail Order"
      links={[
        { label: "Manage Orders", link: "/admin/orders", isActive: false },
        { label: "ORD-3243432", link: "#", isActive: true },
      ]}
    >
      <div className="flex flex-col xl:flex-row gap-6 xl:items-start">
        <div className="w-full xl:w-3/4">
          <Box>
            <OrderNo />
            <OrderDetail />
          </Box>
        </div>
        <div className="w-full xl:w-1/4">
          <Box>
            <div className="space-y-3">
              <FormSelect />
              <Button variant="warning" block>
                Save{" "}
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </AdminTemplate>
  );
}

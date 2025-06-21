import Box from "src/components/atoms/Box";
import Button from "src/components/atoms/Button";
import FormSelect from "src/components/atoms/FormSelect";
import OrderDetail from "src/components/organisms/OrderDetail";
import AdminTemplate from "../../components/templates/AdminTemplate";
import OrderNo from "src/components/atoms/OrderNo";
import { useParams } from "react-router-dom";
import { useOrder } from "src/config/queries";
import { useFormik } from "formik";
import { useUpdateOrder } from "src/config/mutators";
import { toast } from "sonner";

export default function OrderShow() {
  const { id } = useParams();
  const { mutateAsync: performUpdateOrderStatus } = useUpdateOrder();
  const { data: orderData, refetch } = useOrder({
    params: {
      id: id,
      populate: "*",
    },
    config: { enabled: !!id },
  });

  const formik = useFormik({
    initialValues: {
      order_status: orderData?.data?.order_status || "pending_payment",
    },
    onSubmit: async () => {
      await performUpdateOrderStatus({
        id: orderData?.data?.documentId,
        data: {
          order_status: formik.values.order_status,
        },
      });
      toast.success("Order status updated successfully");
      refetch();
    },
    enableReinitialize: true,
  });

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
            <OrderNo order={orderData?.data} />
            <OrderDetail order={orderData?.data} />
          </Box>
        </div>
        <div className="w-full xl:w-1/4">
          <Box>
            <form onSubmit={formik.handleSubmit} className="space-y-3">
              <FormSelect
                label="Order Status"
                name="order_status"
                onBlur={formik.handleBlur}
                value={formik.values.order_status}
                onChange={formik.handleChange}
                error={formik.errors.order_status}
                touched={formik.touched.order_status}
                options={[
                  {
                    label: "Pending Payment",
                    value: "pending_payment",
                  },
                  { label: "Processing", value: "processing" },
                  { label: "Ready to serve", value: "ready_to_serve" },
                  { label: "Completed", value: "completed" },
                  { label: "Cancelled", value: "cancelled" },
                ]}
              />
              <Button variant="warning" type="submit" block>
                Save
              </Button>
            </form>
          </Box>
        </div>
      </div>
    </AdminTemplate>
  );
}

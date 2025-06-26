import { IOrder } from "src/config/services/orders.service";
import InfoTable from "../atoms/InfoTable";

export default function CustomerInfo({ order }: { order?: IOrder }) {
  return (
    <InfoTable
      name="customer-info"
      items={[
        {
          label: "Table",
          value: order?.table_no || "N/A",
        },
        {
          label: "Name",
          value: order?.customer_name || "N/A",
        },
        {
          label: "Email",
          value: order?.customer_email || "N/A",
        },
        {
          label: "Phone",
          value: order?.customer_phone || "N/A",
        },
        {
          label: "Additional Notes",
          value: order?.order_notes || "N/A",
        },
      ]}
    />
  );
}

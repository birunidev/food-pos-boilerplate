import { IOrder } from "src/config/services/orders.service";
import InfoTable from "../atoms/InfoTable";
import { formatCurrency } from "src/utils/currency";

export default function TotalInfo({ order }: { order: IOrder }) {
  return (
    <InfoTable
      name="total-info"
      items={[
        {
          label: "Sub Total",
          value: formatCurrency(order?.subtotal) || "N/A",
        },
        {
          label: "Tax (10%)",
          value: formatCurrency(order?.tax) || "N/A",
        },
        {
          label: "Grand Total",
          value: formatCurrency(order?.grand_total) || "N/A",
        },
      ]}
    />
  );
}

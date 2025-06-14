import { IOrder } from "src/config/services/orders.service";
import InfoTable from "../atoms/InfoTable";

export default function OrderInfo({ order }: { order: IOrder }) {
  return (
    <InfoTable
      name="order-info"
      items={[
        {
          label: "Order Date",
          value: order?.order_date || "N/A",
        },
        order?.paid_at && {
          label: "Paid Date",
          value: order?.paid_at || "N/A",
        },
        {
          label: "Payment Status",
          value: (
            <span className="uppercase">{order?.payment_status || "N/A"}</span>
          ),
        },
      ].filter(Boolean)}
    />
  );
}

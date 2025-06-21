import { Link } from "react-router-dom";
import DataLabel from "../atoms/DataLabel";
import OrderNo from "../atoms/OrderNo";
import { IOrder } from "src/config/services/orders.service";
import { formatCurrency } from "src/utils/currency";

interface OrderCardProps {
  isAdmin?: boolean;
  order: IOrder;
}

export default function OrderCard({ isAdmin, order }: OrderCardProps) {
  return (
    <div className="order-card space-y-4 lg:space-y-6 p-6 box-shadow rounded-xl relative">
      <Link
        to={
          isAdmin
            ? `/admin/orders/${order.documentId}`
            : `/my-orders/${order.documentId}`
        }
        className="absolute inset-0"
      ></Link>
      <OrderNo order={order} />
      <hr />
      <div className="space-y-3">
        <DataLabel label="Table" value={order.table_no} />
        <DataLabel label="Name" value={order.customer_name} />
        <DataLabel label="Phone" value={order.customer_phone} />
        <DataLabel label="Sub Total" value={formatCurrency(order.subtotal)} />
        <DataLabel label="Tax (10%)" value={formatCurrency(order.tax)} />
        <DataLabel
          label="Grand Total"
          value={formatCurrency(order.grand_total)}
        />
      </div>
    </div>
  );
}

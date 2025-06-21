import OrderDetail from "../organisms/OrderDetail";
import OrderHead from "../organisms/OrderHead";
import { IOrder } from "src/config/services/orders.service";

export default function OrderReceipt({ order }: { order: IOrder }) {
  return (
    <div className="space-y-12">
      <OrderHead hasPaid={true} order={order} title="E-Receipt" />
      <OrderDetail column={1} order={order} />
    </div>
  );
}

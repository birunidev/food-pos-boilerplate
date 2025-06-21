import { IOrder } from "src/config/services/orders.service";
import Empty from "../atoms/Empty";
import OrderCard from "../molecules/OrderCard";

interface OrderCardsProps {
  isAdmin?: boolean;
  orders: IOrder[];
}

export default function OrderCards({
  isAdmin = false,
  orders = [],
}: OrderCardsProps) {
  return (
    <>
      {orders.length === 0 && (
        <Empty
          image="/assets/images/empty-order.svg"
          title="No Order Data.."
          description="Try to select different date or add new order"
        />
      )}
      {orders.length > 0 && (
        <div className="order-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {orders.map((order) => (
            <OrderCard key={order.id} isAdmin={isAdmin} order={order} />
          ))}
        </div>
      )}
    </>
  );
}

import OrderCard from "../molecules/OrderCard";

interface OrderCardsProps {
  isAdmin?: boolean;
}

export default function OrderCards({ isAdmin = false }: OrderCardsProps) {
  return (
    <>
      {/* <Empty
        image="/assets/images/empty-order.svg"
        title="No Order Data.."
        description="Try to select different date or add new order"
      /> */}
      <div className="order-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <OrderCard isAdmin={isAdmin} />
        <OrderCard isAdmin={isAdmin} />
        <OrderCard isAdmin={isAdmin} />
        <OrderCard isAdmin={isAdmin} />
        <OrderCard isAdmin={isAdmin} />
        <OrderCard isAdmin={isAdmin} />
      </div>
    </>
  );
}

import { IOrder } from "src/config/services/orders.service";
import OrderTitle from "../atoms/OrderTitle";
import CustomerInfo from "../molecules/CustomerInfo";
import OrderInfo from "../molecules/OrderInfo";
import ProductDetails from "../molecules/ProductDetails";
import TotalInfo from "../molecules/TotalInfo";

interface OrderDetailProps {
  column?: number;
  order?: IOrder;
}

const Section = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="space-y-4">{children}</div>;
};

export default function OrderDetail({ column = 2, order }: OrderDetailProps) {
  let columnClassName = "";

  if (column === 2) {
    columnClassName = "lg:grid-cols-2";
  }

  return (
    <div className={`grid grid-cols-1 gap-10 ${columnClassName}`}>
      <div className="space-y-6">
        <Section>
          <OrderTitle />
          <CustomerInfo order={order} />
        </Section>
        <Section>
          <OrderTitle />
          <OrderInfo order={order} />
        </Section>
      </div>
      <Section>
        <OrderTitle />
        <ProductDetails order={order} />
        <TotalInfo order={order} />
      </Section>
    </div>
  );
}

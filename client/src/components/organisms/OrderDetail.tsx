import OrderTitle from "../atoms/OrderTitle";
import CustomerInfo from "../molecules/CustomerInfo";
import OrderInfo from "../molecules/OrderInfo";
import ProductDetails from "../molecules/ProductDetails";
import TotalInfo from "../molecules/TotalInfo";

interface OrderDetailProps {
  column?: number;
}

const Section = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="space-y-4">{children}</div>;
};

export default function OrderDetail({ column = 2 }: OrderDetailProps) {
  let columnClassName = "";

  if (column === 2) {
    columnClassName = "lg:grid-cols-2";
  }

  return (
    <div className={`grid grid-cols-1 gap-10 ${columnClassName}`}>
      <div className="space-y-6">
        <Section>
          <OrderTitle />
          <CustomerInfo />
        </Section>
        <Section>
          <OrderTitle />
          <OrderInfo />
        </Section>
      </div>
      <Section>
        <OrderTitle />
        <ProductDetails />
        <TotalInfo />
      </Section>
    </div>
  );
}

import { Link } from "react-router-dom";
import DataLabel from "../atoms/DataLabel";
import OrderNo from "../atoms/OrderNo";

interface OrderCardProps {
  isAdmin?: boolean;
}

export default function OrderCard({ isAdmin }: OrderCardProps) {
  return (
    <div className="order-card space-y-4 lg:space-y-6 p-6 box-shadow rounded-xl relative">
      <Link
        to={isAdmin ? `/admin/orders/ORD-123213` : `/my-orders/ORD-123123`}
        className="absolute inset-0"
      ></Link>
      <OrderNo />
      <hr />
      <div className="space-y-3">
        <DataLabel label="Table" value="34A" />
        <DataLabel label="Name" value="34A" />
        <DataLabel label="Phone" value="34A" />
        <DataLabel label="Sub Total" value="34A" />
        <DataLabel label="Tax (10%)" value="34A" />
        <DataLabel label="Grand Total" value="34A" />
      </div>
    </div>
  );
}

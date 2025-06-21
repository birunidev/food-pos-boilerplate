import { IOrder } from "src/config/services/orders.service";

// eslint-disable-next-line react-refresh/only-export-components
export const ORDER_STATUS_MAPPER = {
  pending_payment: {
    text: "Pending Payment",
    className: "badge badge-primary",
  },
  processing: {
    text: "Processing",
    className: "badge badge-processing",
  },
  ready_to_serve: {
    text: "Ready to Serve",
    className: "badge badge-processing",
  },
  completed: {
    text: "Completed",
    className: "badge badge-complete",
  },
  cancelled: {
    text: "Cancelled",
    className: "badge badge-primary",
  },
};

export default function OrderNo({ order }: { order: IOrder }) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="font-medium">Order ID</p>
        <p className="text-error font-bold text-lg">#{order?.order_code}</p>
      </div>
      <p className={ORDER_STATUS_MAPPER[order?.order_status]?.className}>
        {ORDER_STATUS_MAPPER[order?.order_status]?.text}
      </p>
    </div>
  );
}

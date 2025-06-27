import { useRecoilState } from "recoil";
import Button from "../atoms/Button";
import OrderDetail from "../organisms/OrderDetail";
import OrderHead from "../organisms/OrderHead";
import toggleCartState from "src/recoil/toggleCart";
import { useOrder } from "src/config/queries";
import { useOrdersWebhook } from "src/config/mutators";
import { useEffect } from "react";

export default function OrderPlaced({ orderId }: { orderId?: string }) {
  const [, setOpenCart] = useRecoilState(toggleCartState);
  const { data: orderData, isLoading } = useOrder({
    config: {
      enabled: !!orderId,
    },
    params: {
      id: orderId,
      populate: "*",
    },
  });

  const { mutateAsync: performOrderWebhook } = useOrdersWebhook();

  const isPendingPayment = orderData?.data?.order_status === "pending_payment";

  // const transactionStatus = midtransData?.transaction_status;
  // const hasPaid = transactionStatus === "settlement";
  useEffect(() => {
    let interval = null;
    if (!isLoading) {
      if (orderData?.data && isPendingPayment) {
        interval = setInterval(() => {
          performOrderWebhook({
            midtransTransactionId: orderData?.data?.midtrans_transaction_id,
          }).then((response) => {
            console.log(response);
            if (
              response.data.payment_status === "paid" ||
              response.data.order_status === "cancelled"
            ) {
              window.location.href = "/my-orders";
            }
          });
        }, 2000);
      }
    }

    // Cleanup interval on component unmount
    return () => {
      if (interval) clearInterval(interval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderData?.data, isPendingPayment]);

  return (
    <div className="space-y-12">
      <OrderHead hasPaid={!isPendingPayment} order={orderData?.data} />
      <OrderDetail column={1} order={orderData?.data} />
      <div className="relative">
        <label
          onClick={() => setOpenCart(false)}
          htmlFor="orderPlacedModal"
          className="absolute inset-0 w-full h-full block"
        ></label>
        <Button
          onClick={() => setOpenCart(false)}
          variant="primary"
          block
          outline
        >
          Order Again
        </Button>
      </div>
    </div>
  );
}

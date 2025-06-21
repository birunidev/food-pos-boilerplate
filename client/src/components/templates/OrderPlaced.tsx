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
  const { data: orderData } = useOrder({
    config: {
      enabled: !!orderId,
    },
    params: {
      id: orderId,
      populate: "*",
    },
  });

  const { mutateAsync: performOrderWebhook, data: webhookData } =
    useOrdersWebhook();
  const hasPaid = webhookData?.data?.payment_status === "paid";

  // const transactionStatus = midtransData?.transaction_status;
  // const hasPaid = transactionStatus === "settlement";
  useEffect(() => {
    let interval = null;
    if (orderData?.data && !hasPaid) {
      interval = setInterval(() => {
        performOrderWebhook({
          midtransTransactionId: orderData?.data?.midtrans_transaction_id,
        });
      }, 2000);
    }

    // Cleanup interval on component unmount
    return () => {
      if (interval) clearInterval(interval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderData?.data, hasPaid]);

  return (
    <div className="space-y-12">
      <OrderHead hasPaid={hasPaid} order={orderData?.data} />
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

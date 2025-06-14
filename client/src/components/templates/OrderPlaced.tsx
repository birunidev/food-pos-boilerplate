import { useRecoilState } from "recoil";
import Button from "../atoms/Button";
import OrderDetail from "../organisms/OrderDetail";
import OrderHead from "../organisms/OrderHead";
import toggleCartState from "src/recoil/toggleCart";
import { useOrder } from "src/config/queries";

export default function OrderPlaced({ orderId }: { orderId?: string }) {
  const [, setOpenCart] = useRecoilState(toggleCartState);
  const { data } = useOrder({
    config: {
      enabled: !!orderId,
    },
    params: {
      id: orderId,
      populate: "*",
    },
  });

  console.log(data);

  return (
    <div className="space-y-12">
      <OrderHead order={data?.data} />
      <OrderDetail column={1} order={data?.data} />
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

import { useRecoilState } from "recoil";
import Button from "../atoms/Button";
import OrderDetail from "../organisms/OrderDetail";
import OrderHead from "../organisms/OrderHead";
import toggleCartState from "src/recoil/toggleCart";

export default function OrderPlaced() {
  const [, setOpenCart] = useRecoilState(toggleCartState);
  return (
    <div className="space-y-12">
      <OrderHead />
      <OrderDetail column={1} />
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

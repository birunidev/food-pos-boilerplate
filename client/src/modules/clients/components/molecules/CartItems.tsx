import { useRecoilState } from "recoil";
import CartItem from "../atoms/CartItem";
import cartState from "src/recoil/cart";

export default function CartItems() {
  const [cart] = useRecoilState(cartState);
  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <CartItem key={item.id} {...item} hasDeleteBtn hasQtyBtn />
      ))}
    </div>
  );
}

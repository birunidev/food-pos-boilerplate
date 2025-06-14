import CartItem from "../atoms/CartItem";
import { useCart } from "../organisms/use-cart";

export default function CheckoutItems() {
  const { cart } = useCart();
  return (
    <div className="space-y-4">
      {cart.map((item, index) => (
        <CartItem
          key={index}
          hasDeleteBtn={false}
          hasQtyBtn={false}
          {...item}
        />
      ))}
    </div>
  );
}

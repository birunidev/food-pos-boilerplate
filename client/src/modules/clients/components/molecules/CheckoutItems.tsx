import CartItem from "../atoms/CartItem";

export default function CheckoutItems() {
  return (
    <div className="space-y-4">
      <CartItem hasDeleteBtn={false} hasQtyBtn={false} />
      <CartItem hasDeleteBtn={false} hasQtyBtn={false} />
      <CartItem hasDeleteBtn={false} hasQtyBtn={false} />
    </div>
  );
}

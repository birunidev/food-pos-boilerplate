import { useRecoilState } from "recoil";
import cartState from "src/recoil/cart";

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const getSubtotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const getTax = () => getSubtotal() * 0.11;

  const getTotal = () => {
    const subtotal = getSubtotal();
    const tax = getTax();
    return subtotal + tax;
  };

  const cartReadyToCheckout =
    cart?.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
    })) || [];

  return { getSubtotal, getTax, cart, setCart, getTotal, cartReadyToCheckout };
};

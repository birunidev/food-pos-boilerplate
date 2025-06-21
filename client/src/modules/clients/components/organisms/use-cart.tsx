import { useLocalStorage } from "react-use";
import { useRecoilState } from "recoil";
import cartState from "src/recoil/cart";
import cartStepState from "src/recoil/cartStep";

export const useCart = () => {
  const [step, setStep] = useRecoilState(cartStepState);

  const [cart, setCart] = useRecoilState(cartState);
  const [, , removeCart] = useLocalStorage("FP__CART");

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

  const resetCart = () => {
    setCart([]);
    removeCart();
    setStep(1);
  };

  return {
    getSubtotal,
    getTax,
    cart,
    setCart,
    getTotal,
    cartReadyToCheckout,
    resetCart,
    step,
    setStep,
  };
};

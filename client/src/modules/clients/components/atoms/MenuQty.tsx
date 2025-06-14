import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useLocalStorage } from "react-use";
import { useRecoilState } from "recoil";
import cartState from "src/recoil/cart";
import { IProduct } from "src/types/product.types";

export default function MenuQty({ product }: { product: IProduct }) {
  const [cart, setCart] = useRecoilState(cartState);
  const [, setStoredCart] = useLocalStorage("FP__CART");

  const foundProductInCart = cart.find((item) => item.id === product.id);

  const handleIncrease = () => {
    // check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    // if it exists, increase the quantity
    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            subtotal: (item.quantity + 1) * item.price,
          };
        }
        return item;
      });
      setCart(updatedCart);
      setStoredCart(updatedCart);
    } else {
      // if it does not exist, add the product to the cart with quantity 1
      const newProduct = {
        ...product,
        quantity: 1,
        subtotal: product.price,
      };
      setCart([...cart, newProduct]);
      setStoredCart([...cart, newProduct]);
    }
    // if it does not exist, add the product to the cart with quantity 1
  };

  const handleDecrease = () => {
    // check if the product exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          const newQuantity = item.quantity - 1;

          if (newQuantity >= 1) {
            return {
              ...item,
              quantity: newQuantity,
              subtotal: newQuantity * item.price,
            };
          }
          return item;
        }
        return item;
      });
      setCart(updatedCart);
      setStoredCart(updatedCart);
    } else {
      return;
    }
  };

  return (
    <div className="flex items-center gap-2 2xl:gap-3">
      <button
        onClick={handleDecrease}
        className="w-[28px] h-[28px] flex items-center justify-center border border-gray-200 rounded-full leading-[0]"
      >
        <IconMinus size={15} />
      </button>
      <span className="font-semibold block text-sm">
        {foundProductInCart?.quantity || 0}
      </span>
      <button
        onClick={handleIncrease}
        className="w-[28px] h-[28px] flex items-center justify-center border border-gray-200 rounded-full leading-[0]"
      >
        <IconPlus size={15} />
      </button>
    </div>
  );
}

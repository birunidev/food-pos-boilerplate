import { atom } from "recoil";
import { IProduct } from "src/types/product.types";

export interface ICartItem extends IProduct {
  quantity: number;
  subtotal: number;
}

const cartState = atom<ICartItem[]>({
  key: "cart",
  default: localStorage.getItem("FP__CART")
    ? JSON.parse(localStorage.getItem("FP__CART"))
    : [],
});

export default cartState;

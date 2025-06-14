import { IconTrash } from "@tabler/icons-react";
import MenuQty from "./MenuQty";
import cartState, { ICartItem } from "src/recoil/cart";
import { formatCurrency } from "src/utils/currency";
import { getThumbnailUrl } from "src/utils/image";
import { useRecoilState } from "recoil";
import { useLocalStorage } from "react-use";

interface CartItem extends ICartItem {
  hasQtyBtn?: boolean;
  hasDeleteBtn?: boolean;
}

export default function CartItem({
  hasQtyBtn,
  hasDeleteBtn,
  ...product
}: CartItem) {
  const [cart, setCart] = useRecoilState(cartState);
  const [, setStoredCart] = useLocalStorage("FP__CART");

  const handleDelete = () => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setStoredCart(updatedCart);
  };

  return (
    <div className="flex items-start gap-3 w-full">
      <div
        style={{
          background: `url(${getThumbnailUrl(product.thumbnail.url)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[100px] h-[60px] rounded-lg md:rounded-xl overflow-hidden"
      ></div>
      <div className="flex items-end justify-between w-full">
        <div className="space-y-1">
          <p className="font-bold">{product.title}</p>
          <p className="text-gray-600 text-xs">
            {!hasQtyBtn ? `${product.quantity}x` : ""} -{" "}
            {formatCurrency(product.price)}
          </p>
          {hasQtyBtn && <MenuQty product={product} />}
        </div>
        <div className="text-right space-y-2">
          <p className="font-semibold text-sm">
            {formatCurrency(product.subtotal)}
          </p>
          {hasDeleteBtn && (
            <button onClick={handleDelete} className="text-primary">
              <IconTrash size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

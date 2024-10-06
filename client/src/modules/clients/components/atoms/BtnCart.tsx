import { IconShoppingCart } from "@tabler/icons-react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import toggleCartState from "src/recoil/toggleCart";

export default function BtnCart() {
  const [openCart, setOpenCart] = useRecoilState(toggleCartState);

  useEffect(() => {
    if (openCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openCart]);

  return (
    <button
      className="relative"
      onClick={() => {
        setOpenCart(true);
      }}
    >
      <span className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-primary absolute text-[10px] text-white -left-2 -top-2">
        3
      </span>
      <IconShoppingCart />
    </button>
  );
}

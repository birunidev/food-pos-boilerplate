import { IconTrash } from "@tabler/icons-react";
import MenuQty from "./MenuQty";

interface CartItem {
  hasQtyBtn?: boolean;
  hasDeleteBtn?: boolean;
}

export default function CartItem({ hasQtyBtn, hasDeleteBtn }: CartItem) {
  return (
    <div className="flex items-start gap-3 w-full">
      <div className="w-[100px] h-[61px] rounded-lg md:rounded-xl overflow-hidden">
        <img src="/assets/images/menu/menu-1.png" className="w-full" alt="" />
      </div>
      <div className="flex items-end justify-between w-full">
        <div className="space-y-1">
          <p className="font-bold">Beef Steak</p>
          <p className="text-gray-600 text-xs">
            {!hasQtyBtn ? "1x" : ""} - Rp 20,000
          </p>
          {hasQtyBtn && <MenuQty />}
        </div>
        <div className="text-right space-y-2">
          <p className="font-semibold text-sm">Rp 20,000</p>
          {hasDeleteBtn && (
            <button className="text-primary">
              <IconTrash size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

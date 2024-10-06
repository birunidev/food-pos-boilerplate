import { IconTrash } from "@tabler/icons-react";

export default function ProductCard() {
  return (
    <div className="product-card w-full space-y-2 p-4 rounded-xl">
      <div className="h-[200px] lg:h-[150px] xl:h-[180px] object-cover object-center overflow-hidden rounded-xl">
        <img src="/assets/images/menu/menu-1.png" className="w-full" alt="" />
      </div>
      <div className="flex items-center justify-between py-3">
        <div>
          <p className="font-bold text-lg">Beef Stake</p>
          <p className="text-error font-semibold text-sm">Rp 20,000</p>
        </div>
        <button className="w-[40px] h-[40px] bg-[#FFECEC] rounded-full flex items-center justify-center">
          <IconTrash className="stroke-error" size={20} />
        </button>
      </div>
    </div>
  );
}

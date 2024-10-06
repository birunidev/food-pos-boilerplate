import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function MenuQty() {
  return (
    <div className="flex items-center gap-2 2xl:gap-3">
      <button className="w-[28px] h-[28px] flex items-center justify-center border border-gray-200 rounded-full leading-[0]">
        <IconMinus size={15} />
      </button>
      <span className="font-semibold block text-sm">0</span>
      <button className="w-[28px] h-[28px] flex items-center justify-center border border-gray-200 rounded-full leading-[0]">
        <IconPlus size={15} />
      </button>
    </div>
  );
}

export default function ProductDetail() {
  return (
    <div className="product-detail flex items-center justify-between text-sm md:text-base">
      <div className="flex items-center gap-3">
        <div className="product-detail__img w-[61px] h-[50px] overflow-hidden rounded-xl">
          <img src="/assets/images/menu/menu-1.png" className="w-full" alt="" />
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-sm">Fried Chicken - 2x</p>
          <p className="text-xs text-gray-600">Rp 19,000</p>
        </div>
      </div>
      <p className="font-semibold text-sm">Rp 19,000</p>
    </div>
  );
}

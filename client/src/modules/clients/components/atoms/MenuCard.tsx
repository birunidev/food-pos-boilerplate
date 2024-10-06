import MenuQty from "./MenuQty";

export default function MenuCard() {
  return (
    <div className="flex md:flex-col items-start gap-3 w-full p-3 md:p-4 box-shadow rounded-lg md:rounded-xl">
      <div className="w-[100px] h-[61px] md:w-full md:h-[150px] 2xl:h-[200px] rounded-lg md:rounded-xl overflow-hidden">
        <img src="/assets/images/menu/menu-1.png" className="w-full" alt="" />
      </div>
      <div className="flex flex-col w-full">
        <div>
          <p className="font-bold 2xl:text-xl">Beef Steak</p>
          <div className="flex items-center gap-1 justify-between">
            <p className="font-bold text-error text-xs md:text-sm 2xl:text-base">
              Rp 20,000
            </p>
            <MenuQty />
          </div>
        </div>
      </div>
    </div>
  );
}

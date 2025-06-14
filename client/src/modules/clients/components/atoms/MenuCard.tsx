import { IProduct } from "src/types/product.types";
import MenuQty from "./MenuQty";
import { getThumbnailUrl } from "src/utils/image";
import { formatCurrency } from "src/utils/currency";

export default function MenuCard({ product }: { product: IProduct }) {
  return (
    <div className="flex md:flex-col items-start gap-3 w-full p-3 md:p-4 box-shadow rounded-lg md:rounded-xl">
      <div className="w-[100px] h-[61px] md:w-full md:h-[150px] 2xl:h-[200px] rounded-lg md:rounded-xl overflow-hidden">
        <img
          src={getThumbnailUrl(product.thumbnail.url)}
          className="w-full"
          alt=""
        />
      </div>
      <div className="flex flex-col w-full">
        <div>
          <p className="font-bold 2xl:text-xl">{product.title}</p>
          <div className="flex items-center gap-1 justify-between">
            <p className="font-bold text-error text-xs md:text-sm 2xl:text-base">
              {formatCurrency(product.price)}
            </p>
            <MenuQty product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

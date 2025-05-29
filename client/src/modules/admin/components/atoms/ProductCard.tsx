import { IconTrash } from "@tabler/icons-react";
import { IProduct } from "src/types/product.types";
import { formatCurrency } from "src/utils/currency";
import { getThumbnailUrl } from "src/utils/image";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="product-card w-full space-y-2 p-4 rounded-xl">
      <div className="h-[200px] lg:h-[150px] xl:h-[180px] object-cover object-center overflow-hidden rounded-xl">
        <img
          src={getThumbnailUrl(product.thumbnail.url)}
          className="w-full"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between py-3">
        <div>
          <p className="font-bold text-lg">{product.title}</p>
          <p className="text-error font-semibold text-sm">
            {formatCurrency(product.price)}
          </p>
        </div>
        <button className="w-[40px] h-[40px] bg-[#FFECEC] rounded-full flex items-center justify-center">
          <IconTrash className="stroke-error" size={20} />
        </button>
      </div>
    </div>
  );
}

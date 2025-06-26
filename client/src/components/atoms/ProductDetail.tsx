import { OrderedItem } from "src/config/services/orders.service";
import { formatCurrency } from "src/utils/currency";
import { getThumbnailUrl } from "src/utils/image";

export default function ProductDetail({ product }: { product: OrderedItem }) {
  return (
    <div className="product-detail flex items-center justify-between text-sm md:text-base">
      <div className="flex items-center gap-3">
        <div className="product-detail__img  overflow-hidden rounded-xl">
          <img
            src={getThumbnailUrl(product.product_thumbnail)}
            className="w-full w-[60px] h-[50px] object-fit"
            alt=""
          />
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-sm">
            {product.product_title} - {product.quantity}x
          </p>
          <p className="text-xs text-gray-600">
            {formatCurrency(product.product_price)}
          </p>
        </div>
      </div>
      <p className="font-semibold text-sm">
        {formatCurrency(product.subtotal)}
      </p>
    </div>
  );
}

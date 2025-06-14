import { IOrder } from "src/config/services/orders.service";
import ProductDetail from "../atoms/ProductDetail";

export default function ProductDetails({ order }: { order: IOrder }) {
  return (
    <div className="space-y-4">
      {order?.ordered_items?.map((product) => (
        <ProductDetail key={product.product_title} product={product} />
      ))}
    </div>
  );
}

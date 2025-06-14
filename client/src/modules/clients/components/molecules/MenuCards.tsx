import { IProduct } from "src/types/product.types";
import MenuCard from "../atoms/MenuCard";

export default function MenuCards({ products = [] }: { products: IProduct[] }) {
  return (
    <div className="space-y-2 md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-4">
      {products.map((product) => (
        <MenuCard key={product.id} product={product} />
      ))}
    </div>
  );
}

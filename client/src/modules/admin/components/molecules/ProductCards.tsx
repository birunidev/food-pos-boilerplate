import { IProduct } from "src/types/product.types";
import ProductCard from "../atoms/ProductCard";

export default function ProductCards({
  data,
}: {
  data: IProduct[] | undefined;
}) {
  return (
    <>
      {data.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </>
  );
}

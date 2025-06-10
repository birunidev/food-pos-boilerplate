import { IconTrash } from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDeleteProduct } from "src/config/mutators";
import { getProductsQueryKey } from "src/config/queries";
import { IProduct } from "src/types/product.types";
import { formatCurrency } from "src/utils/currency";
import { getThumbnailUrl } from "src/utils/image";

export default function ProductCard({ product }: { product: IProduct }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: performDeleteProduct } = useDeleteProduct();

  const navigateToEditProduct = (productId: string) => {
    navigate(`/admin/products/${productId}/edit`);
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure ?")) return;

    try {
      await performDeleteProduct({ id: product.documentId });
      toast.success("Product deleted successfully");
      queryClient.invalidateQueries({
        queryKey: getProductsQueryKey({ populate: "*" }),
      });
    } catch (error) {
      toast.error("Failed to delete product");
      console.log("Error deleting product:", error);
    }
  };

  return (
    <div
      onClick={() => navigateToEditProduct(product.documentId)}
      className="cursor-pointer product-card w-full space-y-2 p-4 rounded-xl"
    >
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
        <button
          onClick={handleDelete}
          className="w-[40px] h-[40px] bg-[#FFECEC] rounded-full flex items-center justify-center"
        >
          <IconTrash className="stroke-error" size={20} />
        </button>
      </div>
    </div>
  );
}

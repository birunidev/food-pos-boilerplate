import FormInput from "src/components/atoms/FormInput";
import ImageUploader from "../atoms/ImageUploader";
import Button from "src/components/atoms/Button";
import { useFormik } from "formik";
import { ProductRequest } from "src/config/services/product.service";
import * as Yup from "yup";
import FormSelect from "src/components/atoms/FormSelect";
import { useState } from "react";
import {
  useCreateProduct,
  useUpdateProduct,
  useUploadFile,
} from "src/config/mutators";
import { toast } from "sonner";
import { useCategories } from "src/config/queries";
import { IProduct } from "src/types/product.types";
import { useNavigate } from "react-router-dom";

export default function ProductForm({
  product,
}: {
  product: IProduct | undefined;
}) {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const { mutateAsync: performUploadFile } = useUploadFile();

  const { data: categoryData } = useCategories({
    params: { pagination: { pageSize: 100 } },
  });

  const { mutateAsync: performUpdateProduct, isPending: isPendingUpdate } =
    useUpdateProduct();
  const { mutateAsync: performCreateProduct, isPending } = useCreateProduct();

  const isEditing = !!product;

  const formik = useFormik({
    initialValues: {
      title: product?.title || "",
      price: product?.price || 0,
      category:
        product?.category?.documentId ||
        (categoryData?.data?.length > 0 &&
          categoryData?.data?.[0]?.documentId) ||
        "",
    },
    onSubmit: async (values: ProductRequest) => {
      try {
        // validate file
        if (!thumbnail && !isEditing) {
          toast.error("Please upload a thumbnail image for the product.");
          return;
        }

        let thumbnailId = product?.thumbnail?.id ?? null;

        if (thumbnail) {
          const formData = new FormData();
          formData.append("files", thumbnail);
          const fileResponse = await performUploadFile(formData);
          // get file id
          thumbnailId = fileResponse?.[0]?.id;
          if (!thumbnailId) {
            toast.error("Failed to upload thumbnail image.");
            return;
          }
        }
        if (isEditing) {
          await performUpdateProduct({
            id: product.documentId,
            data: {
              ...values,
              thumbnail: thumbnailId,
            },
          });
          toast.success("Product updated successfully!");
        } else {
          await performCreateProduct({ ...values, thumbnail: thumbnailId });
          toast.success("Product created successfully!");
        }
        navigate("/admin/products");
      } catch (error) {
        toast.error("Failed to create product. Please try again.");
        console.error("Error creating product:", error);
      }
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Menu name is required")
        .min(3, "Menu name must be at least 3 characters"),
      price: Yup.number()
        .required("Price is required")
        .min(0, "Price must be a positive number"),
      category: Yup.string().required("Category is required"),
    }),
    enableReinitialize: true,
  });

  const categoryOptions = categoryData?.data?.map?.((category) => ({
    label: category.name,
    value: category.documentId,
  }));

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-sm space-y-4">
      <FormInput
        label="Menu Name"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.title}
        touched={formik.touched.title}
      />
      <FormInput
        label="Price"
        name="price"
        type="number"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.price}
        touched={formik.touched.price}
      />
      <FormSelect
        label="Category"
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.category}
        touched={formik.touched.category}
        options={categoryOptions}
      />
      <ImageUploader value={product?.thumbnail?.url} onChange={setThumbnail} />
      <Button type="submit" variant="warning" block>
        {isPending || isPendingUpdate ? "Saving product..." : "Save product"}
      </Button>
    </form>
  );
}

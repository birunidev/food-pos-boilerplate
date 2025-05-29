import { useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import Box from "src/components/atoms/Box";
import Button from "src/components/atoms/Button";
import FormInput from "src/components/atoms/FormInput";
import { useCreateCategory, useUpdateCategory } from "src/config/mutators";
import { ICategory } from "src/types/category.types";
import { getResponseErrorMessage } from "src/utils/api";
import * as Yup from "yup";

export default function CategoryForm({
  category,
}: {
  category: ICategory | null;
}) {
  const [, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const { mutateAsync: performCreateCategory, error: createdError } =
    useCreateCategory();
  const { mutateAsync: performUpdateCategory, error: updatedError } =
    useUpdateCategory();

  const formik = useFormik({
    initialValues: {
      name: category?.name ?? "",
      emoji: category?.emoji ?? "",
      slug: category?.slug ?? "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        if (category) {
          await performUpdateCategory({
            id: category.documentId,
            data: { ...values },
          });
          await queryClient.setQueryData(
            ["/categories/" + category.documentId],
            () => null
          );
          toast.success("Category updated successfully!");
          setSearchParams({});
        } else {
          await performCreateCategory({ ...values });
          toast.success("Category created successfully!");
        }

        formik.resetForm();
        queryClient.invalidateQueries({
          queryKey: ["/categories"],
        });
      } catch (error) {
        console.error("Error creating category:", error);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      emoji: Yup.string().required(),
      slug: Yup.string().required(),
    }),
  });

  // Category Name
  // category-name
  useEffect(() => {
    if (formik.values.name) {
      formik.setFieldValue(
        "slug",
        formik.values.name.toLowerCase().replace(/\s+/g, "-")
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.name]);

  const error = createdError || updatedError;

  return (
    <Box title="Manage Category Form">
      {error && (
        <p className="text-red-600">{getResponseErrorMessage(error)}</p>
      )}
      <form onSubmit={formik.handleSubmit} className="space-y-3">
        <div className="space-y-2">
          <FormInput
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.name}
            touched={formik.touched.name}
          />
          <FormInput
            label="Emoji"
            name="emoji"
            value={formik.values.emoji}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.emoji}
            touched={formik.touched.emoji}
          />
          <FormInput
            label="Slug"
            name="slug"
            value={formik.values.slug}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.slug}
            touched={formik.touched.slug}
          />
        </div>
        <Button block type="submit" variant="warning">
          Save Category
        </Button>
      </form>
    </Box>
  );
}

import { useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect } from "react";
import Box from "src/components/atoms/Box";
import Button from "src/components/atoms/Button";
import FormInput from "src/components/atoms/FormInput";
import { useCreateCategory } from "src/config/mutators";
import { getResponseErrorMessage } from "src/utils/api";
import * as Yup from "yup";

export default function CategoryForm() {
  const queryClient = useQueryClient();
  const { mutateAsync: performCreateCategory, error } = useCreateCategory();
  const formik = useFormik({
    initialValues: {
      name: "",
      emoji: "",
      slug: "",
    },
    onSubmit: async (values) => {
      try {
        await performCreateCategory({
          name: values.name,
          emoji: values.emoji,
          slug: values.slug,
        });
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

  console.log(formik.errors);
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

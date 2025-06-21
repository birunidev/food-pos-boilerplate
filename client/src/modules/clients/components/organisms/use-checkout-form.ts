import { useFormik } from "formik";
import { useOrdersCheckoutCreate } from "src/config/mutators";
import * as Yup from "yup";
import { useCart } from "./use-cart";
import { toast } from "sonner";
import { ICheckoutResponse } from "src/config/services/orders.service";
import { useRecoilState } from "recoil";
import clientAuthState from "src/recoil/clientAuth";

export const useCheckoutForm = ({
  onCheckoutSuccess,
}: {
  onCheckoutSuccess?: (response: ICheckoutResponse) => void;
}) => {
  const [storedAuth] = useRecoilState(clientAuthState);
  const { mutateAsync: performCheckout, isPending } = useOrdersCheckoutCreate();
  const { cartReadyToCheckout, resetCart } = useCart();
  const formik = useFormik({
    initialValues: {
      customer_name: "",
      customer_email: "",
      customer_phone: storedAuth || "",
      order_type: "DINE_IN",
      order_notes: "",
      table_no: "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (cartReadyToCheckout.length === 0) {
        toast.error(
          "Your cart is empty. Please add items to your cart before checking out."
        );
        return;
      }
      try {
        const response = await performCheckout({
          ...values,
          order_items: cartReadyToCheckout,
        });

        toast.success("Checkout successful!");
        resetCart();
        document.getElementById("order-placed-modal-trigger")?.click(); // Trigger the modal to open

        onCheckoutSuccess?.(response);
        // open order placed modal
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: Yup.object({
      customer_name: Yup.string().required("Customer name is required"),
      customer_phone: Yup.string()
        .required("Phone number is required")
        .matches(
          /^(\+62|62|0)8[1-9][0-9]{6,10}$/,
          "Please enter a valid Indonesian phone number"
        ),
      order_notes: Yup.string().max(
        100,
        "Notes must be 100 characters or less"
      ),
      table_no: Yup.string().required("Table number is required"),
    }),
  });
  const isLoading = formik.isSubmitting || isPending;

  return { ...formik, isLoading };
};

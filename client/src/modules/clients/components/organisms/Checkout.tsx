import Button from "src/components/atoms/Button";
import CheckoutItems from "../molecules/CheckoutItems";
import DataLabel from "src/components/atoms/DataLabel";
import IcCustomer from "src/assets/icons/IcCustomer";
import FormInput from "src/components/atoms/FormInput";
import CustomSelect from "src/components/atoms/CustomSelect";
import { useCart } from "./use-cart";
import { formatCurrency } from "src/utils/currency";
import { useCheckoutForm } from "./use-checkout-form";
import { ICheckoutResponse } from "src/config/services/orders.service";

export default function Checkout({
  onCheckoutSuccess,
}: {
  onCheckoutSuccess?: (response: ICheckoutResponse) => void;
}) {
  const { getSubtotal, getTax, getTotal } = useCart();

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isLoading,
    setFieldValue,
  } = useCheckoutForm({
    onCheckoutSuccess,
  });

  return (
    <div className="relative h-full">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg">Checkout</h1>
        </div>
        <div className="space-y-4">
          <div className="h-[250px] overflow-y-scroll">
            <CheckoutItems />
          </div>
          <div className="space-y-2">
            <DataLabel
              label="Sub Total"
              value={formatCurrency(getSubtotal())}
            />
            <DataLabel label="Tax (10%)" value={formatCurrency(getTax())} />
            <DataLabel label="Grand Total" value={formatCurrency(getTotal())} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <IcCustomer />
            <p className="font-semibold">Customer Detail</p>
          </div>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="table_no"
              label="No. Table"
              value={values.table_no}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.table_no}
              touched={touched.table_no}
            />
            <FormInput
              name="customer_name"
              label="Your Name"
              value={values.customer_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.customer_name}
              touched={touched.customer_name}
            />
            <FormInput
              name="customer_email"
              label="Your Email"
              value={values.customer_email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.customer_email}
              touched={touched.customer_email}
            />
            <FormInput
              name="customer_phone"
              label="Your Phone"
              value={values.customer_phone}
              onChange={handleChange}
              disabled={true}
              onBlur={handleBlur}
            />
            <CustomSelect
              label="Type"
              options={[
                {
                  label: "Dine In",
                  value: "DINE_IN",
                },
                {
                  label: "Take Away",
                  value: "TAKE_AWAY",
                },
              ]}
              value={values.order_type}
              onChange={(value) => setFieldValue("order_type", value)}
              name="order_type"
            />
            <FormInput
              name="order_notes"
              label="Additional Notes"
              type="textarea"
              value={values.order_notes}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.order_notes}
              touched={touched.order_notes}
            />
            <div className="mt-5">
              <Button
                type="submit"
                disabled={isLoading}
                variant="warning"
                block
              >
                {isLoading ? "Processing..." : "Checkout"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-12 pb-12 relative">
        <label
          id="order-placed-modal-trigger"
          htmlFor="orderPlacedModal"
          className="absolute inset-0 w-full h-full block"
        ></label>
      </div>
    </div>
  );
}

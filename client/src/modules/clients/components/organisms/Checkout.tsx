import Button from "src/components/atoms/Button";
import CheckoutItems from "../molecules/CheckoutItems";
import DataLabel from "src/components/atoms/DataLabel";
import IcCustomer from "src/assets/icons/IcCustomer";
import FormInput from "src/components/atoms/FormInput";
import CustomSelect from "src/components/atoms/CustomSelect";

export default function Checkout() {
  return (
    <div className="relative h-full">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg">Checkout</h1>
        </div>
        <div className="space-y-4">
          <div className="h-[300px] overflow-y-scroll">
            <CheckoutItems />
          </div>
          <div className="space-y-2">
            <DataLabel label="Sub Total" value="Rp 65.000" />
            <DataLabel label="Tax (10%)" value="Rp 6.500" />
            <DataLabel label="Grand Total" value="Rp 78.000" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <IcCustomer />
            <p className="font-semibold">Customer Detail</p>
          </div>
          <form>
            <FormInput
              label="No. Table"
              value=""
              onChange={(e) => console.log(e.target.value)}
              onBlur={(e) => console.log(e.target.value)}
              error=""
              touched={false}
            />
            <FormInput
              label="Your Name"
              value=""
              onChange={(e) => console.log(e.target.value)}
              onBlur={(e) => console.log(e.target.value)}
              error=""
              touched={false}
            />
            <FormInput
              label="Your Phone"
              value=""
              onChange={(e) => console.log(e.target.value)}
              onBlur={(e) => console.log(e.target.value)}
              error=""
              touched={false}
            />
            <CustomSelect
              label="Type"
              options={[
                {
                  label: "Dine In",
                  value: "dine-in",
                },
                {
                  label: "Take Away",
                  value: "take-away",
                },
              ]}
              value="dine-in"
              onChange={(value) => console.log(value)}
              name="type"
            />
            <FormInput
              label="Additional Notes"
              type="textarea"
              value=""
              onChange={(e) => console.log(e.target.value)}
              onBlur={(e) => console.log(e.target.value)}
              error=""
              touched={false}
            />
          </form>
        </div>
      </div>
      <div className="mt-12 pb-12 relative">
        <label
          htmlFor="orderPlacedModal"
          className="absolute inset-0 w-full h-full block"
        ></label>
        <Button type="button" variant="warning" block>
          Checkout
        </Button>
      </div>
    </div>
  );
}

import Button from "src/components/atoms/Button";
import CartItems from "../molecules/CartItems";
import { IconX } from "@tabler/icons-react";
import { useRecoilState } from "recoil";
import toggleCartState from "src/recoil/toggleCart";
import Checkout from "./Checkout";
import { useState } from "react";
import Modal from "../atoms/Modal";
import OrderPlaced from "src/components/templates/OrderPlaced";

export default function Cart() {
  const [openCart, setOpenCart] = useRecoilState(toggleCartState);
  const [step, setStep] = useState<number>(1);

  return (
    <div
      className={[
        "fixed top-0 transition-all w-full h-screen bg-white z-[50] p-4 cart",
        "md:max-w-[300px] xl:max-w-[300px] xl:right-0 border-l border-gray-100 xl:max-w-[350px] overflow-y-scroll",
        openCart ? "right-0" : "right-[-100%]",
      ].join(" ")}
    >
      {step === 2 ? (
        <Checkout />
      ) : (
        <div className="relative h-full">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-lg">Cart</h1>
              <button
                className="xl:hidden"
                onClick={() => setOpenCart(!openCart)}
              >
                <IconX size={20} />
              </button>
            </div>
            <div className="h-[500px] overflow-y-scroll">
              <CartItems />
              {/* <Empty
                imageClassName="max-w-[200px]"
                image="/assets/images/empty-cart.svg"
                title="Cart is Empty"
                description="Please add some items from the menu"
              /> */}
            </div>
          </div>
          <div className="absolute bottom-0 w-full left-0 space-y-4 md:pb-3">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Grand Total</p>
              <p className="font-semibold">Rp 445,999</p>
            </div>
            <Button
              onClick={() => setStep(2)}
              type="button"
              variant="warning"
              block
            >
              Place Order
            </Button>
          </div>
        </div>
      )}
      <Modal id="orderPlacedModal">
        <OrderPlaced />
      </Modal>
    </div>
  );
}

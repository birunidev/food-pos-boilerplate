import Button from "src/components/atoms/Button";
import CartItems from "../molecules/CartItems";
import { IconX } from "@tabler/icons-react";
import { useRecoilState } from "recoil";
import toggleCartState from "src/recoil/toggleCart";
import Checkout from "./Checkout";
import { useState } from "react";
import Modal from "../atoms/Modal";
import OrderPlaced from "src/components/templates/OrderPlaced";
import { useCart } from "./use-cart";
import { formatCurrency } from "src/utils/currency";

export default function Cart() {
  const [openCart, setOpenCart] = useRecoilState(toggleCartState);
  const { getSubtotal, step, setStep } = useCart();
  const { cart } = useCart();
  const [orderId, setOrderId] = useState<string>("");

  return (
    <div
      className={[
        "fixed top-0 transition-all w-full h-screen bg-white z-[50] p-2 cart",
        "md:max-w-[300px] xl:max-w-[300px] xl:right-0 border-l border-gray-100 xl:max-w-[400px] ",
        openCart ? "right-0" : "right-[-100%]",
      ].join(" ")}
    >
      {step === 2 && cart.length > 0 ? (
        <Checkout
          onCheckoutSuccess={(response) => setOrderId(response.documentId)}
        />
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
            {cart.length === 0 && (
              <div className="flex items-center justify-center h-[500px]">
                <p className="text-gray-500">Your cart is empty...</p>
              </div>
            )}
            {cart.length > 0 && (
              <div className="h-[700px] overflow-y-scroll">
                <CartItems />
              </div>
            )}
          </div>
          {cart.length > 0 && (
            <div className="absolute bottom-0 w-full left-0 space-y-4 md:pb-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Grand Total</p>
                <p className="font-semibold">{formatCurrency(getSubtotal())}</p>
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
          )}
        </div>
      )}
      <Modal id="orderPlacedModal">
        <OrderPlaced orderId={orderId} />
      </Modal>
    </div>
  );
}

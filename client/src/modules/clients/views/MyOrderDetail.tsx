import OrderDetail from "src/components/organisms/OrderDetail";
import BaseTemplate from "../components/templates/BaseTemplate";
import { IconArrowLeft } from "@tabler/icons-react";
import Box from "src/components/atoms/Box";
import OrderNo from "src/components/atoms/OrderNo";
import { Link, useParams } from "react-router-dom";
import { useOrder } from "src/config/queries";
import Modal from "../components/atoms/Modal";
import OrderReceipt from "src/components/templates/OrderReceipt";
import OrderPlaced from "src/components/templates/OrderPlaced";

export default function MyOrderDetail() {
  const { id } = useParams();

  const { data: orderData } = useOrder({
    params: { id: id, populate: "*" },
    config: { enabled: !!id },
  });

  const hasPaid = orderData?.data?.payment_status === "paid";
  return (
    <BaseTemplate>
      <div className="space-y-4 2xl:space-y-6 custom-container">
        <div className="pt-4 flex items-center justify-between">
          <h1 className="font-bold text-lg md:text-xl xl:text-2xl flex items-center gap-4">
            <Link
              to="/my-orders"
              className="w-[40px] h-[40px] block rounded-full bg-white box-shadow flex items-center justify-center"
            >
              <IconArrowLeft />
            </Link>
            Detail Order
          </h1>
          <div className="flex items-center gap-4">
            {hasPaid && (
              <label htmlFor="order-receipt-modal" className="btn btn-warning">
                Download E-Receipt
              </label>
            )}
            {!hasPaid && (
              <label htmlFor="order-placed-modal" className="btn btn-error">
                Finish Payment
              </label>
            )}
          </div>
        </div>
        <Box>
          <OrderNo order={orderData?.data} />
          <OrderDetail column={2} order={orderData?.data} />
        </Box>
      </div>
      <Modal id="order-receipt-modal">
        <OrderReceipt order={orderData?.data} />
      </Modal>
      <Modal id="order-placed-modal">
        <OrderPlaced orderId={orderData?.data.documentId} />
      </Modal>
    </BaseTemplate>
  );
}

import OrderDetail from "src/components/organisms/OrderDetail";
import BaseTemplate from "../components/templates/BaseTemplate";
import { IconArrowLeft } from "@tabler/icons-react";
import Box from "src/components/atoms/Box";
import OrderNo from "src/components/atoms/OrderNo";
import { Link } from "react-router-dom";

export default function MyOrderDetail() {
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
            <button className="btn btn-warning">Download E-Receipt</button>
            <button className="btn btn-error">Finish Payment</button>
          </div>
        </div>
        <Box>
          <OrderNo />
          <OrderDetail column={2} />
        </Box>
      </div>
    </BaseTemplate>
  );
}

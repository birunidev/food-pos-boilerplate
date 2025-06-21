import BaseTemplate from "../components/templates/BaseTemplate";
import OrderCards from "src/components/organisms/OrderCards";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useOrders } from "src/config/queries";
import { useRecoilState } from "recoil";
import clientAuthState from "src/recoil/clientAuth";

export default function MyOrders() {
  const [storedAuthPhone] = useRecoilState(clientAuthState);
  const { data: orderData } = useOrders({
    params: {
      filters: {
        customer_phone: {
          $eq: storedAuthPhone,
        },
      },
    },
  });

  return (
    <BaseTemplate>
      <div className="space-y-4 2xl:space-y-6 custom-container">
        <div className="pt-4">
          <h1 className="font-bold text-lg md:text-xl xl:text-2xl flex items-center gap-4">
            <Link
              to="/"
              className="w-[40px] h-[40px] block rounded-full bg-white box-shadow flex items-center justify-center"
            >
              <IconArrowLeft />
            </Link>
            My Orders
          </h1>
        </div>
        <OrderCards orders={orderData?.data} />
      </div>
    </BaseTemplate>
  );
}

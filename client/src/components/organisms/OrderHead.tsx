import { IOrder } from "src/config/services/orders.service";
import Logo from "../atoms/Logo";
import { formatCurrency } from "src/utils/currency";
import { useEffect, useState } from "react";

export default function OrderHead({ order }: { order: IOrder | undefined }) {
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
  };

  // Countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0; // Stop countdown at 0
        }
        return prev - 1; // Decrease countdown
      });
    }, 1000); // Update every second
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="text-center flex items-center justify-center my-4">
        <Logo />
      </div>
      <div className="space-y-5 text-center">
        <div className="space-y-1">
          <h1 className="text-lg font-bold">Successfully Placed an Order!</h1>
          <p className="text-secondary text-sm">
            Order Code: #{order?.order_code}
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm">
            Finish your payment in{" "}
            <span className="font-bold">{formatTime(countdown)}</span> minutes
          </p>
          <div className="text-center">
            <img className="mx-auto w-[100px]" src={order?.qris_url} alt="" />
          </div>
          <div className="space-y-3">
            <p className="font-bold">
              Total Payment : {formatCurrency(order?.grand_total)}
            </p>
            <p className="text-secondary text-sm">
              You can pay using any QRIS method you like{" "}
            </p>
            <div>
              <img src="/assets/images/payments.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

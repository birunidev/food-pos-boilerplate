import Logo from "../atoms/Logo";

export default function OrderHead() {
  return (
    <div>
      <div className="text-center flex items-center justify-center my-4">
        <Logo />
      </div>
      <div className="space-y-5 text-center">
        <div className="space-y-1">
          <h1 className="text-lg font-bold">Successfully Placed an Order!</h1>
          <p className="text-secondary text-sm">Order Code: #C-342212</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm">Finish your payment in 04:02</p>
          <div className="text-center">
            <img
              className="mx-auto w-[100px]"
              src="/assets/images/qris-placeholder.png"
              alt=""
            />
          </div>
          <div className="space-y-3">
            <p className="font-bold">Total Payment : Rp 299,999</p>
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

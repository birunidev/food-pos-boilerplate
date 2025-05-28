import midtransClient from "midtrans-client";

interface MidtransPayload {
  transaction_details: {
    gross_amount: number;
    order_id: string;
  };
  customer_details: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  };
}

// Create Core API instance
const core = new midtransClient.CoreApi({
  isProduction: process.env.NODE_ENV === "production",
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export const createMidtransTransaction = async (payload: MidtransPayload) => {
  const finalMidtransPayload = {
    ...payload,
    payment_type: "qris",
    qris: {
      acquirer: "airpay shopee",
    },
  };

  try {
    const midtransResponse = await core.charge(finalMidtransPayload);

    return midtransResponse;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create midtrans transaction");
  }
};

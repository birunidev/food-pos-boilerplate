import InfoTable from "../atoms/InfoTable";

export default function OrderInfo() {
  return (
    <InfoTable
      name="order-info"
      items={[
        {
          label: "Order Date",
          value: "John Doe",
        },
        {
          label: "Paid Date",
          value: "John Doe",
        },
        {
          label: "Payment Status",
          value: "John Doe",
        },
      ]}
    />
  );
}

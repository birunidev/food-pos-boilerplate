import InfoTable from "../atoms/InfoTable";

export default function TotalInfo() {
  return (
    <InfoTable
      name="total-info"
      items={[
        {
          label: "Sub Total",
          value: "John Doe",
        },
        {
          label: "Tax (10%)",
          value: "John Doe",
        },
        {
          label: "Grand Total",
          value: "John Doe",
        },
        {
          label: "Paid",
          value: "John Doe",
        },
      ]}
    />
  );
}

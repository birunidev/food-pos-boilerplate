import InfoTable from "../atoms/InfoTable";

export default function CustomerInfo() {
  return (
    <InfoTable
      name="customer-info"
      items={[
        {
          label: "Table",
          value: "John Doe",
        },
        {
          label: "Name",
          value: "John Doe",
        },
        {
          label: "Phone",
          value: "John Doe",
        },
        {
          label: "Additional Notes",
          value: "John Doe",
        },
      ]}
    />
  );
}

import FormInput from "src/components/atoms/FormInput";

export default function OrderFilter({
  values,
  onChange,
}: {
  values: { date_from: string; date_to: string };
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-md gap-3">
      <FormInput
        label="From"
        type="date"
        name="date_from"
        value={values.date_from}
        onChange={(e) => onChange("date_from", e.target.value)}
        onBlur={(e) => onChange("date_from", e.target.value)}
      />
      <FormInput
        label="To"
        type="date"
        name="date_to"
        value={values.date_to}
        onChange={(e) => onChange("date_to", e.target.value)}
        onBlur={(e) => onChange("date_to", e.target.value)}
      />
    </div>
  );
}

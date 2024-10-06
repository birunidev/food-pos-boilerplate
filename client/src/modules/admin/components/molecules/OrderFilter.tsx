import FormInput from "src/components/atoms/FormInput";

export default function OrderFilter() {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-md gap-3">
      <FormInput
        label="From"
        type="date"
        value=""
        onChange={(e) => console.log(e.target.value)}
        onBlur={(e) => console.log(e.target.value)}
        error=""
        touched={false}
      />
      <FormInput
        label="To"
        type="date"
        value=""
        onChange={(e) => console.log(e.target.value)}
        onBlur={(e) => console.log(e.target.value)}
        error=""
        touched={false}
      />
    </div>
  );
}

interface FormSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  name: string;
  error?: string;
  touched?: boolean;
  options: {
    label: string;
    value: string;
  }[];
  label: string;
}

export default function FormSelect({
  value,
  onChange,
  onBlur,
  name,
  error,
  touched,
  options = [],
  label,
}: FormSelectProps) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-bold">{label}</span>
      </div>
      <select
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className="select select-bordered"
      >
        <option disabled selected>
          Pick one
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && touched && (
        <div className="label">
          <span className="label-text-alt text-red-600">{error}</span>
        </div>
      )}
    </label>
  );
}

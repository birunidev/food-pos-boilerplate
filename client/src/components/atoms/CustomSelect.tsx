interface CustomSelectProps {
  value: string;
  onChange: (value: string | number) => void;
  options: { label: string; value: string | number }[];
  label: string;
  name: string;
}

export default function CustomSelect({
  value,
  onChange,
  options,
  label,
  name,
}: CustomSelectProps) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text font-bold">{label}</span>
      </div>
      <div className="selector-wrapper flex items-center gap-3">
        {options?.map((option, index) => {
          return (
            <button
              onClick={() => onChange(option.value)}
              type="button"
              className={`${value == option.value ? "active" : ""}`}
              key={`custom-selector-${name}-${index}`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </label>
  );
}

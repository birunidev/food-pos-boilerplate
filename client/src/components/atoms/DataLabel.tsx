interface DataLabelProps {
  label: string;
  value: string | number | Array<string | number>;
  labelClassName?: string;
  valueClassName?: string;
  wrapperClassName?: string;
}

export default function DataLabel({
  label,
  value,
  labelClassName,
  wrapperClassName,
  valueClassName,
}: DataLabelProps) {
  return (
    <div
      className={`flex gap-2 justify-between items-center ${wrapperClassName}`}
    >
      <p
        className={[labelClassName, "font-medium text-sm md:text-base"].join(
          " "
        )}
      >
        {label}
      </p>
      <div
        className={[valueClassName, "font-medium text-sm md:text-base"].join(
          " "
        )}
      >
        {Array.isArray(value) ? (
          value.map((v, i) => <span key={i}>{v}</span>)
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  );
}

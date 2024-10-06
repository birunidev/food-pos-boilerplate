interface FormInputProps {
  label: string;
  type?: "text" | "password" | "email" | "number" | "date" | "textarea";
  error?: string;
  touched?: boolean;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  leftIcon?: React.ReactNode;
}

export default function FormInput({
  label,
  error,
  touched,
  value,
  onChange,
  onBlur,
  wrapperClassName,
  labelClassName,
  inputClassName,
  leftIcon,
  type = "text",
}: FormInputProps) {
  return (
    <label className={`form-control w-full ${wrapperClassName}`}>
      <div className={`label ${labelClassName}`}>
        <span className="label-text font-bold">{label}</span>
      </div>
      <div className="relative">
        {leftIcon && (
          <span className="absolute top-1/2 -translate-y-1/2 left-2 form-icon">
            {leftIcon}
          </span>
        )}
        {type === "textarea" ? (
          <textarea
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`textarea textarea-bordered w-full ${inputClassName}`}
          ></textarea>
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Type here"
            className={`input input-bordered w-full ${
              leftIcon ? "pl-10" : ""
            } ${inputClassName}`}
          />
        )}
      </div>

      {error && touched && (
        <div className="label">
          <span className="label-text-alt">{error}</span>
        </div>
      )}
    </label>
  );
}

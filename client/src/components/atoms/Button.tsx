interface ButtonProps {
  children: React.ReactNode | React.ReactNode[];
  variant: "primary" | "secondary" | "success" | "warning" | "danger";
  block?: boolean;
  type?: "button" | "submit" | "reset";
  outline?: boolean;
  size?: "sm" | "md" | "lg" | undefined;
  onClick?: () => void;
}

const variantMapper: Record<ButtonProps["variant"], string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  success: "btn btn-success",
  warning: "btn btn-warning",
  danger: "btn btn-error",
};

const sizeMapper: {
  sm: string;
  md: string;
  lg: string;
} = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const Button = ({
  children,
  onClick,
  type = "button",
  block = false,
  variant = "primary",
  outline = false,
  size = "md",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={[
        variantMapper[variant],
        sizeMapper[size],
        block ? "btn-block" : "",
        outline ? "btn-outline" : "",
        "rounded-xl !px-6",
      ].join(" ")}
    >
      {children}
    </button>
  );
};
export default Button;

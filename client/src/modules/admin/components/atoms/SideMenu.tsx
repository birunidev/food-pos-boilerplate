import { Link, To } from "react-router-dom";

interface SideMenuProps {
  icon: string;
  label: string;
  link: To;
  onClick?: () => void;
  type?: "link" | "button";
  isActive?: boolean;
}

export default function SideMenu({
  icon,
  label,
  link,
  onClick,
  type = "link",
  isActive = false,
}: SideMenuProps) {
  if (type === "button") {
    return (
      <button
        onClick={onClick}
        className="pl-14 w-full relative p-4 w-full inline-block text-left rounded-xl side-menu"
      >
        <span className="absolute w-[20px] left-4 top-1/2 -translate-y-1/2">
          <img src={`/assets/icons/${icon}.svg`} alt="" />
        </span>
        <span className="font-semibold">{label}</span>
      </button>
    );
  }

  return (
    <Link
      to={link}
      className={[
        "pl-14 w-full relative p-4 w-full block rounded-xl side-menu",
        isActive ? "active" : "",
      ].join(" ")}
    >
      <span className="absolute w-[20px] left-4 top-1/2 -translate-y-1/2">
        <img src={`/assets/icons/${icon}.svg`} alt="" />
      </span>
      <span className="font-semibold">{label}</span>
    </Link>
  );
}

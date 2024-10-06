import {
  IconLogout,
  IconMeat,
  IconPaperBag,
  IconUser,
} from "@tabler/icons-react";
import { Link, To } from "react-router-dom";

interface NavItemProps {
  icon: "menu" | "order" | "logout" | "admin";
  label: string;
  link?: To;
  isActive: boolean;
  type?: "link" | "button";
  onClick?: () => void;
}

const iconMapper: {
  [key in NavItemProps["icon"]]: JSX.Element;
} = {
  menu: <IconMeat />,
  order: <IconPaperBag />,
  logout: <IconLogout />,
  admin: <IconUser />,
};

export default function NavItem({
  icon,
  label,
  isActive,
  link,
  onClick,
  type = "link",
}: NavItemProps) {
  if (link === undefined && type === "button") {
    return (
      <button
        className={[
          "nav-item text-center space-y-2 block",
          isActive ? "active" : "",
        ].join(" ")}
        onClick={onClick}
      >
        <div className="nav-item__icon">{iconMapper[icon]}</div>
        <p className="text-sm">{label}</p>
      </button>
    );
  }

  if (link)
    return (
      <Link
        to={link}
        className={[
          "nav-item text-center space-y-2 block",
          isActive ? "active" : "",
        ].join(" ")}
      >
        <div className="nav-item__icon">{iconMapper[icon]}</div>
        <p className="text-sm">{label}</p>
      </Link>
    );
}

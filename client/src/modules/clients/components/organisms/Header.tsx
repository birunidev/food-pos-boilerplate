import Logo from "src/components/atoms/Logo";
import BtnCart from "../atoms/BtnCart";
import { Link, useLocation } from "react-router-dom";
import { clientMenus } from "src/constants/menu";

export default function Header() {
  const location = useLocation();

  let usedPathname = location.pathname;

  if (usedPathname.includes("my-orders")) {
    usedPathname = "/my-orders";
  }

  return (
    <div className="py-4">
      <div className="custom-container flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Logo />
          <ul className="hidden md:flex items-center gap-3 md:gap-6">
            {clientMenus.map((menu, index) => (
              <li key={index} className="">
                <Link
                  to={menu.link}
                  className={`text-sm md:text-base ${
                    usedPathname == menu.link ? "font-bold" : ""
                  }`}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:hidden">
          <BtnCart />
        </div>
      </div>
    </div>
  );
}

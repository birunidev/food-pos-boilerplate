import { menus } from "src/constants/menu";
import SideMenu from "../atoms/SideMenu";
import { useLocation } from "react-router-dom";
import { useLocalStorage } from "react-use";

export default function SideMenus() {
  const [, , removeToken] = useLocalStorage("FP__JWT_AUTH");
  const location = useLocation();

  let usedPathname = location?.pathname;
  if (location.pathname.includes("/admin/products")) {
    usedPathname = "/admin/products";
  }
  if (location.pathname.includes("/admin/orders")) {
    usedPathname = "/admin/orders";
  }

  return (
    <div className="space-y-2">
      {menus.map((menu, index) => (
        <SideMenu
          key={index}
          icon={menu.icon}
          link={menu.link}
          label={menu.label}
          type="link"
          isActive={menu.link === usedPathname}
        />
      ))}
      <SideMenu
        icon="ic-logout"
        label="Logout"
        type="button"
        onClick={() => {
          removeToken();
          window.location.href = "/auth/fp-login";
        }}
        link="/logout"
      />
    </div>
  );
}

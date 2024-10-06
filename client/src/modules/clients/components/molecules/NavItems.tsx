import { clientMenus } from "src/constants/menu";
import NavItem from "../atoms/NavItem";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    navigate("/auth/login");
  };

  return (
    <div className="flex items-center justify-between">
      {clientMenus.map((menu, index) => {
        return (
          <NavItem
            key={index}
            icon={menu.icon}
            label={menu.label}
            link={menu.link}
            isActive={location.pathname === menu.link}
          />
        );
      })}
      <NavItem
        icon="logout"
        label="Logout"
        isActive={false}
        type="button"
        onClick={handleLogout}
      />
    </div>
  );
}

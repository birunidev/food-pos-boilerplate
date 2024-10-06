import Logo from "src/components/atoms/Logo";
import SideMenus from "../molecules/SideMenus";
import { useRecoilState } from "recoil";
import toggleMenuState from "src/recoil/toggleMenuState";
import { createPortal } from "react-dom";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(toggleMenuState);
  return (
    <div
      className={[
        "fixed w-[250px] xl:w-[300px] h-full z-50 space-y-12 pt-8 px-4 lg:pt-12 lg:px-8 bg-[#FFB800] transition-all",
        isMenuOpen ? "left-0 z-[60]" : "left-[-100%]",
        "lg:left-0",
      ].join(" ")}
    >
      <div className="ml-3">
        <Logo />
      </div>
      <SideMenus />
      {createPortal(
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`backdrop lg:hidden ${isMenuOpen ? "active" : ""}`}
        ></div>,
        document.body
      )}
    </div>
  );
}

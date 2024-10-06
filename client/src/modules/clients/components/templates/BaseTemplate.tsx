import { useLocation } from "react-router-dom";
import BottomNav from "../organisms/BottomNav";
import Cart from "../organisms/Cart";
import Header from "../organisms/Header";

interface BaseTemplateProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function BaseTemplate({ children }: BaseTemplateProps) {
  const location = useLocation();

  const hasCart = location.pathname === "/";
  return (
    <div className="space-y-6">
      <Header />
      <div className="pb-32 md:space-y-0 pt-5 md:pt-0">
        <div>{children}</div>
        {hasCart && <Cart />}
      </div>
      <BottomNav />
    </div>
  );
}

import { useRecoilState } from "recoil";
import Notification from "../atoms/Notification";
import UserNav from "../atoms/UserNav";

import PageTitle from "../molecules/PageTitle";
import { IconMenu2 } from "@tabler/icons-react";
import toggleMenuState from "src/recoil/toggleMenuState";

interface TopbarProps {
  title?: string;
  links?: { label: string; link: string; isActive: boolean }[];
}

export default function Topbar({ title, links }: TopbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(toggleMenuState);

  return (
    <div className="py-4 lg:py-8 flex items-start justify-between">
      <div className="flex items-start gap-4">
        <button
          className="lg:hidden md:mt-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IconMenu2 stroke={2} />
        </button>
        <div className="hidden md:block">
          <PageTitle title={title} links={links} />
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <Notification />
        <div></div>
        <UserNav />
      </div>
    </div>
  );
}

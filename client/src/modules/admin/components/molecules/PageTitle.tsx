import Breadcrumb from "../atoms/Breadcrumb";

interface PageTitleProps {
  title?: string;
  links?: { label: string; link: string; isActive: boolean }[];
}

export default function PageTitle({ title, links = [] }: PageTitleProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title || "Dashboard"}</h1>
      {links.length > 0 && <Breadcrumb links={links} />}
    </div>
  );
}

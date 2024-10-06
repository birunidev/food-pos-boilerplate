import PageTitle from "../molecules/PageTitle";
import Sidebar from "../organisms/Sidebar";
import Topbar from "../organisms/Topbar";

interface AdminTemplateProps {
  children: React.ReactNode;
  title?: string;
  links?: { label: string; link: string; isActive: boolean }[];
}

export default function AdminTemplate({
  children,
  title,
  links,
}: AdminTemplateProps) {
  return (
    <div>
      <Sidebar />
      <div className="ml-[0px] lg:ml-[250px] xl:ml-[300px]">
        <div className="custom-container">
          <Topbar title={title} links={links} />
          <div className="space-y-6 pb-12">
            <div className="md:hidden">
              <PageTitle title={title} links={links} />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

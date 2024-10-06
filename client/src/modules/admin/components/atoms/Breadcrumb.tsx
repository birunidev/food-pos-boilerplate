import { Link } from "react-router-dom";

interface BreadcrumbProps {
  links: { label: string; link: string; isActive: boolean }[];
}

export default function Breadcrumb({ links }: BreadcrumbProps) {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        {links.map((link, index) =>
          link?.isActive ? (
            <li key={index}>{link.label}</li>
          ) : (
            <li key={index}>
              <Link to={link.link}>{link.label}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

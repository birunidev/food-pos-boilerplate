interface ClientMenuObject {
  label: string;
  icon: "menu" | "order" | "logout" | "admin";
  link: string;
}

export const menus = [
  {
    label: "Dashboard",
    icon: "ic-dashboard",
    link: "/admin",
  },
  {
    label: "Manage Menu",
    icon: "ic-menu",
    link: "/admin/products",
  },
  {
    label: "Manage Category",
    icon: "ic-category",
    link: "/admin/categories",
  },
  {
    label: "Manage Orders",
    icon: "ic-order",
    link: "/admin/orders",
  },
];

export const clientMenus: ClientMenuObject[] = [
  {
    label: "Menu",
    icon: "menu",
    link: "/",
  },
  {
    label: "My Orders",
    icon: "order",
    link: "/my-orders",
  },
  {
    label: "Admin Panel",
    icon: "admin",
    link: "/admin",
  },
];

import { Link } from "react-router-dom";

export default function AddMenuBtn() {
  return (
    <Link
      to="/admin/products/create"
      className="border border-dashed border-warning w-full min-h-[250px] flex items-center justify-center rounded-xl"
    >
      <span className="text-center">
        <img
          src="/assets/icons/ic-plus.svg"
          className="mx-auto translate-x-[3px]"
          alt=""
        />
        <span className="font-bold text-lg">Add New Menu</span>
      </span>
    </Link>
  );
}

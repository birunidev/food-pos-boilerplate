import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/admin" className="w-[123px] block lg:w-[150px]">
      <img src="/assets/logo.svg" className="w-full" alt="" />
    </Link>
  );
}

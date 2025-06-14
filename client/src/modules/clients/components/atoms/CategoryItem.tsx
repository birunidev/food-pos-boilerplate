import { ICategory } from "src/types/category.types";

export default function CategoryItem({
  category: { name, emoji },
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
  category: ICategory;
}) {
  return (
    <button
      onClick={onClick}
      className={`btn-category ${isActive ? "active" : ""}`}
    >
      <span>{emoji}</span>
      <span>{name}</span>
    </button>
  );
}

import CategoryItem from "../atoms/CategoryItem";

export default function CategoryItems() {
  return (
    <div className="category-items space-x-3 whitespace-nowrap overflow-x-scroll pb-3 px-[5%]">
      <CategoryItem name="All Menu" emoji="😋" isActive={true} />
      <CategoryItem name="Main Course" emoji="🍖" isActive={false} />
      <CategoryItem name="Snacks" emoji="🍟" isActive={false} />
    </div>
  );
}

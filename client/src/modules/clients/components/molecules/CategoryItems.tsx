import { ICategory } from "src/types/category.types";
import CategoryItem from "../atoms/CategoryItem";
import { useSearchParams } from "react-router-dom";

export default function CategoryItems({
  categories = [],
}: {
  categories: ICategory[];
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get("category");
  return (
    <div className="category-items space-x-3 whitespace-nowrap overflow-x-scroll pb-3 px-[5%]">
      <CategoryItem
        onClick={() => setSearchParams({})}
        category={{
          id: null,
          name: "All",
          emoji: "🍽️",
          slug: "all",
          documentId: "all",
        }}
        isActive={activeCategory === null}
      />
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            category={category}
            isActive={activeCategory === String(category.id)}
            onClick={() => setSearchParams({ category: String(category.id) })}
          />
        );
      })}
    </div>
  );
}

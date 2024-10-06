interface CategoryItemProps {
  name: string;
  emoji: string;
  isActive: boolean;
}

export default function CategoryItem({
  emoji,
  name,
  isActive,
}: CategoryItemProps) {
  return (
    <button className={`btn-category ${isActive ? "active" : ""}`}>
      <span>{emoji}</span>
      <span>{name}</span>
    </button>
  );
}

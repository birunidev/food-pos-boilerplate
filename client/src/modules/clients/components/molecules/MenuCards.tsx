import MenuCard from "../atoms/MenuCard";

export default function MenuCards() {
  return (
    <div className="space-y-2 md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-4">
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </div>
  );
}

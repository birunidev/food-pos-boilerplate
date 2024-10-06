import CategoryItems from "../components/molecules/CategoryItems";
import MenuCards from "../components/molecules/MenuCards";
import BaseTemplate from "../components/templates/BaseTemplate";

export default function Home() {
  return (
    <BaseTemplate>
      <div className="space-y-4">
        <div className="custom-container">
          <p className="font-bold">Categories</p>
        </div>
        <CategoryItems />
      </div>
      <div className="custom-container mt-6">
        <div className="xl:max-w-[75%]">
          <MenuCards />
        </div>
      </div>
    </BaseTemplate>
  );
}

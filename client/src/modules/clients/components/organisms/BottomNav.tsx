import NavItems from "../molecules/NavItems";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full py-3 bottom-nav md:hidden">
      <div className="custom-container">
        <NavItems />
      </div>
    </nav>
  );
}

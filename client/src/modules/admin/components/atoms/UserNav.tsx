export default function UserNav() {
  return (
    <div className="flex items-center gap-4">
      <p className="text-sm hidden md:block">Super Admin</p>
      <div className="w-8 h-8 lg:w-12 lg:h-12 overflow-hidden flex items-center justify-center">
        <img src="/assets/images/profile.png" alt="" />
      </div>
    </div>
  );
}

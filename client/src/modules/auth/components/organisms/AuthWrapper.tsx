interface AuthWrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-screen">
        <div className="w-full hidden md:block">
          <img
            src="/assets/images/auth-img.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex md:items-center">
          <div className="custom-container py-6 md:max-w-[350px] lg:max-w-[400px] md:mx-auto">
            <div className="logo">
              <img src="/assets/logo.svg" alt="" />
            </div>
            <div className="mt-[64px]">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

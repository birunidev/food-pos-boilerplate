import React, { createContext, PropsWithChildren } from "react";
import { useLocalStorage } from "react-use";
import { useUsersMe } from "src/config/queries";
import { IUser } from "src/types/user.types";

interface UserContextValue {
  user: IUser | null;
  isReady?: boolean;
  isLoading?: boolean;
}

const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [token] = useLocalStorage("FP__JWT_AUTH");
  const { data, isLoading } = useUsersMe({
    config: {
      enabled: !!token,
    },
  });

  const isUserReady = !!data;

  return (
    <UserContext.Provider
      value={{
        user: data,
        isReady: isUserReady,
        isLoading: isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

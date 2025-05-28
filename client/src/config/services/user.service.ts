import { ApiClient } from "src/config/api";
import { IUser } from "src/types/user.types";

export const getMe = () =>
  ApiClient<IUser>({ method: "GET", url: "/users/me" });

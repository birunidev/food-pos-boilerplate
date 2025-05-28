import { ApiClient } from "src/config/api";
import { IUser } from "src/types/user.types";

export interface LoginData {
  identifier: string;
  password: string;
}
export interface LoginResponse {
  jwt: string;
  user: IUser;
}

export const performLogin = (data: LoginData) =>
  ApiClient<LoginResponse>({
    method: "POST",
    url: "/auth/local",
    data,
  });

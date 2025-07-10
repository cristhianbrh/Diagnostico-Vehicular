import { jwtDecode } from "jwt-decode";

export interface IAccessToken {
  email: string;
  exp: number;
  iat: number;
  id: number;
  name: string;
  role: string;
}
export const getAccessTokenData = async (): Promise<
  IAccessToken | undefined
> => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded: IAccessToken = jwtDecode(token);
      return decoded;
    } catch (e) {
      // Token inválido
      window.location.reload();
      return;
    }
  }
  return;
};

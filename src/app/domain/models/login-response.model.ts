export interface LoginResponseModel {
  id: number;
  accessToken: string;
  tokenType: string;
  refreshToken: string;
  email: string;
}

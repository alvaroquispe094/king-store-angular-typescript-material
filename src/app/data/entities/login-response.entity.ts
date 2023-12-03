import { LoginResponseModel } from 'src/app/domain/models/login-response.model';

export class LoginResponseEntity {
  readonly id: number;
  readonly accessToken: string;
  readonly tokenType: string;
  readonly refreshToken: string;
  readonly email: string;

  constructor(id: number, token: string, tokenType: string, refreshToken: string, email: string) {
    this.id = id;
    this.accessToken = token;
    this.tokenType = tokenType;
    this.refreshToken = refreshToken;
    this.email = email;
  }

  static toDomain(response: LoginResponseEntity): LoginResponseModel {
    return {
      id: response.id,
      accessToken: response.accessToken,
      tokenType: response.tokenType,
      refreshToken: response.refreshToken,
      email: response.email,
    };
  }

  static fromDomain(loginModel: LoginResponseModel): LoginResponseEntity {
    return new LoginResponseEntity(
      loginModel.id,
      loginModel.accessToken,
      loginModel.tokenType,
      loginModel.refreshToken,
      loginModel.email
    );
  }
}

import { SignInModel } from '../../domain/models/sign-in.model';

export class SignInEntity {
  readonly id: number;
  readonly accessToken: string;
  readonly tokenType: string;
  readonly refreshToken: string;
  readonly email: string;
  readonly roles: string[];

  constructor(
    id: number,
    token: string,
    tokenType: string,
    refreshToken: string,
    email: string,
    roles: string[]
  ) {
    this.id = id;
    this.accessToken = token;
    this.tokenType = tokenType;
    this.refreshToken = refreshToken;
    this.email = email;
    this.roles = roles;
  }

  static toDomain(response: SignInEntity): SignInModel {
    return {
      id: response.id,
      accessToken: response.accessToken,
      tokenType: response.tokenType,
      refreshToken: response.refreshToken,
      email: response.email,
      roles: response.roles,
    };
  }

  static fromDomain(loginModel: SignInModel): SignInEntity {
    return new SignInEntity(
      loginModel.id,
      loginModel.accessToken,
      loginModel.tokenType,
      loginModel.refreshToken,
      loginModel.email,
      loginModel.roles
    );
  }
}

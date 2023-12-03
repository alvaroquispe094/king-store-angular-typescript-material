import { RegisterModel } from '../../domain/models/register.model';

export class RegisterEntity {
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly password: string;
  readonly gender: string;
  readonly birthDate: string;
  readonly phone: string;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    gender: string,
    birthDate: string,
    phone: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.birthDate = birthDate;
    this.phone = phone;
  }

  static toDomain(response: RegisterEntity): RegisterModel {
    return {
      firstname: response.firstname,
      lastname: response.lastname,
      email: response.email,
      password: response.password,
      gender: response.gender,
      birthDate: response.birthDate,
      phone: response.phone,
    };
  }

  static fromDomain(loginModel: RegisterModel): RegisterEntity {
    return new RegisterEntity(
      loginModel.firstname,
      loginModel.lastname,
      loginModel.email,
      loginModel.password,
      loginModel.gender,
      loginModel.birthDate,
      loginModel.phone
    );
  }
}

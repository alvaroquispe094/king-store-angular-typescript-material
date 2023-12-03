import { RegisterModel } from '../../domain/models/register.model';

export class SignUpEntity {
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly password: string;
  readonly gender: string;
  readonly birthDate: string;
  readonly phone: string;
  readonly role: string[];

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    gender: string,
    birthDate: string,
    phone: string,
    role: string[]
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.birthDate = birthDate;
    this.phone = phone;
    this.role = role;
  }

  static toDomain(response: SignUpEntity): RegisterModel {
    return {
      firstname: response.firstname,
      lastname: response.lastname,
      email: response.email,
      password: response.password,
      gender: response.gender,
      birthDate: response.birthDate,
      phone: response.phone,
      role: response.role,
    };
  }

  static fromDomain(loginModel: RegisterModel): SignUpEntity {
    return new SignUpEntity(
      loginModel.firstname,
      loginModel.lastname,
      loginModel.email,
      loginModel.password,
      loginModel.gender,
      loginModel.birthDate,
      loginModel.phone,
      loginModel.role
    );
  }
}

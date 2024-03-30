import * as moment from 'moment';
import { UserModel } from '../../domain/models/user.model';

export class UserEntity {
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly password: string;
  readonly gender: string;
  readonly birthDate: string;
  readonly phone: string;
  readonly roles: string[];

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    gender: string,
    birthDate: string,
    phone: string,
    roles: string[]
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.birthDate = birthDate;
    this.phone = phone;
    this.roles = roles;
  }

  static toDomain(response: UserEntity): UserModel {
    return {
      firstname: response.firstname,
      lastname: response.lastname,
      email: response.email,
      password: response.password,
      gender: response.gender,
      birthDate: response.birthDate,
      phone: response.phone,
      role: response.roles?.at(0) || '',
    };
  }

  static fromDomain(loginModel: UserModel): UserEntity {
    return new UserEntity(
      loginModel.firstname,
      loginModel.lastname,
      loginModel.email,
      loginModel.password,
      loginModel.gender,
      moment(loginModel.birthDate).format('DD/MM/YYYY').toString(), // To do: create util class to format dates
      loginModel.phone,
      [loginModel.role]
    );
  }
}

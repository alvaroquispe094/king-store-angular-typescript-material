import * as moment from 'moment';
import { SignUpModel } from '../../domain/models/sign-up.model';

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

  static toDomain(response: SignUpEntity): SignUpModel {
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

  static fromDomain(loginModel: SignUpModel): SignUpEntity {
    return new SignUpEntity(
      loginModel.firstname,
      loginModel.lastname,
      loginModel.email,
      loginModel.password,
      loginModel.gender,
      moment(loginModel.birthDate).format('DD/MM/YYYY').toString(), // To do: create util class to format dates
      loginModel.phone,
      loginModel.role
    );
  }
}

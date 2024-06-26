import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { PATH } from '../paths';
import { environment } from '../../../environments/environment';
import { IAuthService } from '../../domain/services/iauth.service';
import { SignInModel } from '../../domain/models/sign-in.model';
import { SignInEntity } from '../entities/sign-in.entity';
import { UserModel } from '../../domain/models/user.model';
import { UserEntity } from '../entities/user.entity';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  API_BASE = environment.url;

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<SignInModel> {
    console.log('Url: ' + this.API_BASE + PATH.auth.signin);

    return this.http
      .post<SignInEntity>(this.API_BASE + PATH.auth.signin, { email, password })
      .pipe(map(SignInEntity.toDomain));
  }

  signUp(register: UserModel): Observable<unknown> {
    console.log('Url: ' + this.API_BASE + PATH.auth.signup);

    return this.http.post(this.API_BASE + PATH.auth.signup, UserEntity.fromDomain(register));
  }
}

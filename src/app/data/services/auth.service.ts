import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { paths } from '../paths';
import { environment } from 'src/environments/environment';
import { IAuthService } from 'src/app/domain/services/iauth.service';
import { SignInModel } from 'src/app/domain/models/sign-in.model';
import { SignInEntity } from '../entities/sign-in.entity';
import { SignUpModel } from 'src/app/domain/models/sign-up.model';
import { SignUpEntity } from '../entities/sign-up.entity';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  API_BASE = environment.url;

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<SignInModel> {
    console.log('Url: ' + this.API_BASE + paths.auth.signin);

    return this.http
      .post<SignInEntity>(this.API_BASE + paths.auth.signin, { email, password })
      .pipe(map(SignInEntity.toDomain));
  }

  signUp(register: SignUpModel): Observable<unknown> {
    console.log('Url: ' + this.API_BASE + paths.auth.signup);

    return this.http.post(this.API_BASE + paths.auth.signup, SignUpEntity.fromDomain(register));
  }
}

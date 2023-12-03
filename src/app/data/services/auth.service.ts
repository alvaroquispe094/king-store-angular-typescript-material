import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { paths } from '../paths';
import { environment } from 'src/environments/environment';
import { IAuthService } from 'src/app/domain/services/iauth.service';
import { LoginResponseModel } from 'src/app/domain/models/login-response.model';
import { LoginResponseEntity } from '../entities/login-response.entity';
import { RegisterModel } from 'src/app/domain/models/register.model';
import { RegisterEntity } from '../entities/register.entity';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  API_BASE = environment.url;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponseModel> {
    console.log('Url: ' + this.API_BASE + paths.auth.signin);

    return this.http
      .post<LoginResponseEntity>(this.API_BASE + paths.auth.signin, { email, password })
      .pipe(map(LoginResponseEntity.toDomain));
  }

  register(register: RegisterModel): Observable<unknown> {
    console.log('Url: ' + this.API_BASE + paths.auth.signup);

    return this.http.post(this.API_BASE + paths.auth.signup, RegisterEntity.fromDomain(register));
  }
}

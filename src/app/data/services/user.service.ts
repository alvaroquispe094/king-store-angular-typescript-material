import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { PATH } from '../paths';
import { environment } from 'src/environments/environment';
import { IUserService } from '../../domain/services/iuser.service';
import { UserModel } from '../../domain/models/user.model';
import { UserEntity } from '../entities/user.entity';

@Injectable({
  providedIn: 'root',
})
export class UserService implements IUserService {
  API_BASE = environment.url;

  constructor(private http: HttpClient) {}

  getAllUsersByRole(role: string): Observable<UserModel[]> {
    console.log('Url: ' + this.API_BASE + PATH.users + `?role=${role}`);

    return this.http
      .get<UserEntity[]>(this.API_BASE + PATH.users + `?role=${role}`)
      .pipe(map(list => list.map(item => UserEntity.toDomain(item))));
  }

  getUserById(id: number): Observable<UserModel> {
    return this.http
      .get<UserEntity>(this.API_BASE + PATH.users + `/${id}`)
      .pipe(map(UserEntity.toDomain));
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http
      .post<UserEntity>(this.API_BASE + PATH.users, UserEntity.fromDomain(user))
      .pipe(map(UserEntity.toDomain));
  }

  updateUser(user: UserModel, id: number): Observable<UserModel> {
    return this.http
      .put<UserEntity>(this.API_BASE + PATH.users + `/${id}`, UserEntity.fromDomain(user))
      .pipe(map(UserEntity.toDomain));
  }
}

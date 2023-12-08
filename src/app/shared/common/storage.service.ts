import { Injectable } from '@angular/core';
import { SignInModel } from '../../domain/models/sign-in.model';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  clean(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }

  public saveUser(user: SignInModel): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): SignInModel {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {
      id: 0,
      accessToken: '',
      tokenType: '',
      refreshToken: '',
      email: '',
      roles: [],
    };
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}

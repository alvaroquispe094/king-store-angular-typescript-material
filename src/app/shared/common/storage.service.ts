import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, Injectable, PLATFORM_ID, REQUEST, inject } from '@angular/core';
import { SignInModel } from '../../domain/models/sign-in.model';

const USER_KEY = 'auth-user';
const COOKIE_PATH = 'Path=/';
const COOKIE_SAME_SITE = 'SameSite=Lax';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly request = inject(REQUEST, { optional: true });

  clean(): void {
    this.deleteCookie(USER_KEY);
  }

  public saveUser(user: SignInModel): void {
    this.setCookie(USER_KEY, JSON.stringify(user));
  }

  public getUser(): SignInModel {
    const user = this.getCookie(USER_KEY);
    if (user) {
      try {
        return JSON.parse(user) as SignInModel;
      } catch (error) {
        console.error('Invalid auth cookie payload.', error);
        this.deleteCookie(USER_KEY);
      }
    }

    return this.createEmptyUser();
  }

  public isLoggedIn(): boolean {
    return Boolean(this.getUser().accessToken);
  }

  public isAdminUser(): boolean {
    return this.getUser().roles.includes('ROLE_ADMIN');
  }

  public isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private createEmptyUser(): SignInModel {
    return {
      id: 0,
      accessToken: '',
      tokenType: '',
      refreshToken: '',
      email: '',
      roles: [],
    };
  }

  private getCookie(name: string): string | null {
    const cookies = this.readCookieSource();
    const encodedName = `${encodeURIComponent(name)}=`;
    const value = cookies
      .split(';')
      .map(cookie => cookie.trim())
      .find(cookie => cookie.startsWith(encodedName));

    return value ? decodeURIComponent(value.slice(encodedName.length)) : null;
  }

  private readCookieSource(): string {
    if (this.isBrowser()) {
      return this.document.cookie ?? '';
    }

    return this.request?.headers.get('cookie') ?? '';
  }

  private setCookie(name: string, value: string): void {
    if (!this.isBrowser()) {
      return;
    }

    this.document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}`;
  }

  private deleteCookie(name: string): void {
    if (!this.isBrowser()) {
      return;
    }

    this.document.cookie = `${encodeURIComponent(
      name
    )}=; ${COOKIE_PATH}; Max-Age=0; ${COOKIE_SAME_SITE}`;
  }
}

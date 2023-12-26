import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { StorageService } from './storage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const userSession = this.storageService.getUser();
    const isLoggedIn = userSession?.accessToken;
    const isApiUrl = request.url.startsWith(environment.url);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${userSession.accessToken}` },
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.storageService.clean();
          this.router.navigateByUrl('/sign_in');
        }

        return throwError(err);
      })
    );
  }
}

import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Logger } from '../logger.service';
import { AuthenticationService } from './authentication.service';

const log = new Logger('TokenInterceptor');

/**
 * Inject to all requests the auth token if available and active
 */
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _injector: Injector, private auth: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const _token = this._injector.get(TokenService);

    if (_token.isTokenActive()) {
      const token = _token.getToken();

      const update = {
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      };

      request = request.clone(update);
    }
    return next.handle(request).pipe(
      catchError((err: HttpEvent<any>) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          // log.error('Retry a refresh token', err);
          this.auth.handleError(err);
          this.auth.logout();
        }
        throw err;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const routes = {
  // home: () => `/home`,

  home: () => `/starter`,
  login: () => `/login`
};

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  private _cachedRequests: Array<HttpRequest<any>> = [];
  jwtHelper: JwtHelperService;

  constructor(private _router: Router) { }

  public collectFailedRequest(request: HttpRequest<any>): void {
    this._cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

  public to(url?: string, extras?: NavigationExtras) {
    // Get the redirect URL. If no redirect has been set, use the default
    let redirect = url;
    this.jwtHelper = new JwtHelperService();
    redirect = url == '/starter' ? routes.home() : url;

    // Set our navigation extras object
    // that passes on our global query params and fragment
    let navigationExtras: NavigationExtras = extras || {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };

    // Redirect the user
    this._router.navigate([redirect], navigationExtras);
  }

  public toLogin() {
    this._router.navigate([routes.login()]);
  }

  public toHome() {
    debugger;
    this.jwtHelper = new JwtHelperService();
    let value = JSON.parse(localStorage.getItem('credentials') || sessionStorage.getItem('credentials'));
    var parsedToken = this.jwtHelper.decodeToken(value.accessToken);
    this._router.navigate([routes.home()]);
  }
}

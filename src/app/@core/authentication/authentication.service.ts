import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { CredentialsService } from './credentials.service';
import { LoginContext, RegisterContext, AuthorizationEntity, Patient } from './authentication.models';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as moment from 'moment';

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn: boolean;
  jwtHelper: JwtHelperService;

  get isAuthenticated() {
    return this.loggedIn;
  }

  constructor(
    public appSettings: AppSettings,
    private credentialsService: CredentialsService,
    private http: HttpClient,
    private router: Router
  ) { }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<AuthorizationEntity> {
    this.loggedIn = true;
    debugger;
    // Replace by proper authentication call
    var value = {
      login: context.username,
      pwd: context.password
    };
    return this.http.post(this.appSettings.settings.BASE_URL + '/api/patients/login', value).pipe(
      tap((res: any) => {
        // this.jwtHelper = new JwtHelperService();
        // var parsedToken = this.jwtHelper.decodeToken(res.token);
        const data: AuthorizationEntity = {
          username: res.firstName,
          id: res.code,
          accessToken: res.token,
          fullName: res.firstName,
          Image: 'assets/img/logo.png',
          admin: true,
          authorized: true,
          email: res.mail,
          expiresIn: 60,
          menu: ['2', "3", "4", "5", "6", "7", "8", "9", "10"],
          newUser: false
        };

        this.credentialsService.setCredentials(data, context.remember);
      })
    );
  }

  /**
   * Registers the user.
   * @param context The register parameters.
   * @return The user credentials.
   */
  register(context: RegisterContext): Observable<Patient> {
    // Replace by proper registration call
    debugger;
    const data: Patient = {
      cin: null,
      code: null,
      dateNaiss: moment("2020-06-01T12:00:00").format("YYYY-MM-DD"),
      firstName: context.fullName,
      login: context.email,
      mail: context.email,
      photo: "",
      lastName: "",
      pwd: context.password,
      telephone: 12345678
    };

    console.log(data);

    return this.http.post(this.appSettings.settings.BASE_URL + '/api/patients/register', data).pipe(
      tap((res: any) => {
        console.log(res);
        return of(res);
      })
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.router.navigateByUrl('/login');
    this.credentialsService.setCredentials();
    return of(true);
  }

  handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // client-side error

      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error

      errorMessage = `Error Code: ${error.status}`;
    }

    console.log(errorMessage);

    return throwError(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Calendar } from '../Model/Calendar.interface';
import { TokenInterceptor } from '../../../@core/authentication/token.interceptor';
import { AuthenticationService } from '../../../@core/authentication/authentication.service';

@Injectable()
export class CalendarService {
  public headers = new Headers({ 'Content-Type': 'application/json' });
  private loggedIn: boolean;

  constructor(public http: HttpClient, private appSettings: AppSettings, private auth: AuthenticationService) { }
  GetAll(): Observable<any> {
    this.loggedIn = true;
    return this.http
      .get(this.appSettings.settings.BASE_URL + 'api/Agenda')
      .pipe(tap((res: any) => { }, catchError(this.auth.handleError)));
  }

  Delete(id: any): Observable<Calendar> {
    this.loggedIn = true;
    return this.http
      .get(this.appSettings.settings.BASE_URL + 'api/Calendar/Delete?id=' + id)
      .pipe(tap((res: any) => { }, catchError(this.auth.handleError)));
  }

  GetById(id: string): Observable<any> {
    this.loggedIn = true;
    return this.http
      .get(this.appSettings.settings.BASE_URL + 'api/Calendar/GetByID?id=' + id)
      .pipe(tap((res: any) => { }, catchError(this.auth.handleError)));
  }

  Create(data: Calendar): Observable<Calendar> {
    this.loggedIn = true;
    return this.http
      .post(this.appSettings.settings.BASE_URL + 'api/Calendar/Create', data)
      .pipe(tap((res: any) => { }, catchError(this.auth.handleError)));
  }
  Update(data: Calendar): Observable<Calendar> {
    this.loggedIn = true;
    return this.http.post(this.appSettings.settings.BASE_URL + 'api/Calendar/Update', data).pipe(
      tap((res: any) => {
        return res;
      }, catchError(this.auth.handleError))
    );
  }

  GetAllBySeviceType(): Observable<any[]> {
    this.loggedIn = true;
    return this.http
      .get(this.appSettings.settings.BASE_URL + 'api/Calendar/GetByCalendarByServiceType')
      .pipe(tap((res: any) => { }, catchError(this.auth.handleError)));
  }
}

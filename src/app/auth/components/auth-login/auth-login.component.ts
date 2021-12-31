import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Logger, AuthenticationService, BaseFormComponent } from '@core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { faCheck, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faUser, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { finalize, takeUntil } from 'rxjs/operators';
import { RedirectService } from '@core/services/redirect.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../../app.settings';
import { Subject } from 'rxjs';

const log = new Logger('Login');

@Component({
  selector: 'prx-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent extends BaseFormComponent implements OnInit, OnDestroy {
  longArrowAltRight = faLongArrowAltRight;
  faUser = faUser;
  faArrowAltCircleRight = faArrowAltCircleRight;
  check = faCheck;
  icon = 'longArrowAltRight';
  private unsubscribe$ = new Subject();

  constructor(
    //private router: Router,
    private _redirect: RedirectService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private appSettings: AppSettings,
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    super();
    this.isLoading = false;
    this.createForm();
  }

  ngOnInit() { }
  @HostListener('unloaded')
  ngOnDestroy() {
    debugger;
    console.log('Items destroyed');
    location.reload();
  }
  /**
   * Logs-in the user
   * @param form The form value: user + password
   */
  login({ valid, value }: { valid: boolean; value: any }) {
    debugger;
    if (valid) {
      this.isLoading = true;
      this.authenticationService
        .login(value)
        .pipe(
          takeUntil(this.unsubscribe$),
          finalize(() => {
            this.form.markAsPristine();
            this.isLoading = false;
          })
        )
        .subscribe(
          credentials => {
            log.debug(`${credentials.username} successfully logged in`);
            this.route.queryParams.subscribe(params => this.redirect(params));
          },
          error => {
            log.debug(`Login error: ${error}`);
            this.error = error;
          }
        );
    }
  }

  redirect(params: Params) {
    if (params.redirect) {
      this._redirect.to(params.redirect, { replaceUrl: true });
    } else {
      this._redirect.toHome();
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: false
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService, BaseComponent } from '@core';
import { Router } from '@angular/router';
import { AppSettings } from '@app/app.settings';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'prx-header-user-account',
  templateUrl: './header-user-account.component.html',
  styleUrls: ['./header-user-account.component.scss']
})
export class HeaderUserAccountComponent extends BaseComponent implements OnInit {
  value: any = JSON.parse(localStorage.getItem('credentials') || sessionStorage.getItem('credentials'));

  constructor(
    private appSetting: AppSettings,
    private auth: JwtHelperService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.value.image = "https://ik.imagekit.io/rlwxpguqyc0/download_OwWi8N7KR.png?updatedAt=1639698120687";
  }
  profile() {
    this.router.navigateByUrl('/Admin/Edit/' + this.auth.decodeToken(this.value.accessToken).ID);
  }

  settings() {
    this.router.navigateByUrl('/Admin/AssignMenu/' + this.auth.decodeToken(this.value.accessToken).ID);
  }

  logout() {
    localStorage.removeItem('credentials');
    sessionStorage.removeItem('credentials');
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  redirect() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}

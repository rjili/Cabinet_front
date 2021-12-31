import { Component, OnInit, HostBinding, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { AuthenticationService, Logger } from '@core';
import { Router } from '@angular/router';
import { faInbox, faLock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from '@app/layout/services/navigation.service';
import { NavigationOptions } from '@app/layout/models/navigation';
import { AppSettings } from '@app/app.settings';

const logger = new Logger('SidenavComponent');

@Component({
  selector: 'prx-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: { class: 'sidenav' }
})
export class SidenavComponent implements OnInit {
  @HostBinding('class.fixed')
  @Input()
  fixed: boolean;

  @HostBinding('class.hover')
  hover: boolean;

  @HostListener('mouseenter')
  onMouseOver() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover = false;
  }
  value: any = JSON.parse(localStorage.getItem('credentials') || sessionStorage.getItem('credentials'));

  user: any = {
    avatar: {
      picture: "https://ik.imagekit.io/rlwxpguqyc0/download_OwWi8N7KR.png?updatedAt=1639698120687",
      name: this.value.user,
      status: 'online'
    },
    info: this.value.email
  };

  icons = {
    faInbox,
    faLock,
    faSignOutAlt
  };

  navGroups: NavigationOptions[];

  @Output()
  sideNavToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding('class.collapsed')
  @Input()
  collapsed: boolean;

  constructor(
    private router: Router,
    private navigation: NavigationService,
    private authenticationService: AuthenticationService,
    private appSetting: AppSettings
  ) { }

  ngOnInit() {
    this.navigation.getNavigationItems().subscribe(groups => (this.navGroups = groups));
  }

  toggleSidenav() {
    this.collapsed = !this.collapsed;
    this.sideNavToggled.emit(this.collapsed);
  }

  logout() {
    localStorage.removeItem('credentials');
    sessionStorage.removeItem('credentials');
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  onNavLinkToggle(isOpen: boolean) {
    logger.debug(`Nav link toggled ${isOpen}`);
  }
}

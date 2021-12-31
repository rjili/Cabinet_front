import { Component, OnInit, Input, HostListener } from '@angular/core';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const STICKY_POINT = 90;

@Component({
  selector: 'prx-about-navbar',
  templateUrl: './about-navbar.component.html',
  styleUrls: ['./about-navbar.component.scss']
})
export class AboutNavbarComponent implements OnInit {
  icons = {
    buy: faCreditCard,
    demos: faChevronRight
  };

  @Input()
  useOnlyDarkLogo: boolean;

  @Input()
  darkLinks: boolean;

  navbarExpanded: boolean;
  navbarSticky: boolean;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= STICKY_POINT) {
      this.navbarSticky = true;
    } else {
      this.navbarSticky = false;
    }
  }

  constructor() {}

  ngOnInit() {}

  toggleNavbar() {
    this.navbarExpanded = !this.navbarExpanded;
  }
}

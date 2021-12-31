import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  faTh,
  faLayerGroup,
  faUserShield,
  faUserFriends,
  faUser,
  faHome,
  faTicketAlt,
  faBookmark,
  faCreditCard,
  faCube,
  faCar,
  faCarSide,
  faSort,
  faSortAlphaUpAlt,
  faSortUp,
  faClipboardList,
  faClipboardCheck,
  faPaperclip,
  faReceipt,
  faThList,
  faStream,
  faFolder,
  faFolderOpen,
  faIdCardAlt,
  faIdCard,
  faAddressCard,
  faPortrait,
  faMale,
  faPeopleArrows,
  faPeopleCarry,
  faUserTie,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

import { NavigationOptions } from '../models/navigation';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  AllItems: any[] = [];
  constructor() { }

  getNavigationItems(): Observable<NavigationOptions[]> {
    let filtered = new Array();
    let result = new Array();
    let MenuList = JSON.parse(localStorage.getItem('credentials') || sessionStorage.getItem('credentials'));
    let menu = new Array<NavigationOptions>();
    menu = this.getAllNavigation();
    menu.map((item: any) => {
      filtered = [];
      if (item.items)
        item.items.map((i: any) => {
          MenuList.menu.map((element: string) => {
            if (i.level.toString() == element) {
              filtered.push(i);
            }
          });
        });
      if (!item.link) item.items = filtered;
      result.push(item);
    });
    for (let index = 0; index < result.length; index++) {
      if (result[index].items)
        if (result[index].items.length == 0) {
          result.splice(index, 1);
        }
    }

    return of([
      {
        title: 'Main',
        icon: { name: 'home' },
        items: [
          {
            icon: { name: 'home' },
            title: 'Home Page',
            link: '/starter',
            level: 1
          }
        ]
      },
      {
        title: 'Management',
        icon: { name: 'home' },
        items: result
      }
    ]);
  }
  getAllNavigation(): NavigationOptions[] {
    this.AllItems = new Array<NavigationOptions>(
      {
        title: 'Calendar',
        icon: { name: 'calendar' },
        link: '/Calendar/Details'
      },

    );
    return this.AllItems;
  }
}

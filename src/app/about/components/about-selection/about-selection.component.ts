import { Component, OnInit } from '@angular/core';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { LayoutModel } from '@core';
import { merge } from 'lodash';

const VerticalDefault: LayoutModel = {
  style: 'vertical',
  name: 'default',
  vertical: {
    fixedHeader: true,
    fixedSideNav: true,
    sidenavCollapsed: false
  }
};

const HorizontalDefault: LayoutModel = {
  style: 'horizontal',
  name: 'default',
  horizontal: {
    fixedHeader: true
  }
};

@Component({
  selector: 'prx-about-selection',
  templateUrl: './about-selection.component.html',
  styleUrls: ['./about-selection.component.scss']
})
export class AboutSelectionComponent implements OnInit {
  demos: object = [
    // VERTICAL LAYOUTS
    {
      title: 'Vertical Layout',
      description: 'Fixed layout with Sidenav expanded',
      cover: 'vertical-dashboard-social-static-expanded',
      btn: { class: 'primary' },
      urls: [
        {
          link: 'dashboards/social',
          layout: merge({}, VerticalDefault, {
            vertical: {
              sidenavCollapsed: false
            }
          }),
          icon: faDesktop,
          text: 'Demo'
        }
      ]
    },
    {
      title: 'Vertical Layout',
      description: 'Fixed layout with Sidenav collapsed',
      cover: 'vertical-dashboard-social-static-collapsed',
      btn: { class: 'primary' },
      urls: [
        {
          link: 'dashboards/social',
          layout: merge({}, VerticalDefault, {
            vertical: {
              sidenavCollapsed: true
            }
          }),
          icon: faDesktop,
          text: 'Demo'
        }
      ]
    },

    // HORIZONTAL LAYOUTS
    {
      title: 'Horizontal Layout',
      description: 'Fixed top navigation header',
      cover: 'horizontal-dashboard-social',
      btn: { class: 'primary' },
      urls: [
        {
          link: 'dashboards/crm',
          layout: merge({}, HorizontalDefault),
          icon: faDesktop,
          text: 'Demo'
        }
      ]
    },
    {
      title: 'Horizontal Layout',
      description: 'CRM Dashboard',
      cover: 'horizontal-dashboard-crm',
      btn: { class: 'primary' },
      urls: [
        {
          link: 'dashboards/crm',
          layout: merge({}, HorizontalDefault, {
            horizontal: {
              fixedHeader: false
            }
          }),
          icon: faDesktop,
          text: 'Demo'
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}

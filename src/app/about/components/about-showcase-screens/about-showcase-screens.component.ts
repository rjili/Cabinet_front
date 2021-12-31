import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'prx-about-showcase-screens',
  templateUrl: './about-showcase-screens.component.html',
  styleUrls: ['./about-showcase-screens.component.scss']
})
export class AboutShowcaseScreensComponent implements OnInit {
  screens = [
    {
      name: 'Welcome screen',
      description:
        'Welcome screen allows you introduce your app, it might serve as a starting point for settings some default configuration',
      img: 'welcome-screen'
    },
    {
      name: 'Contacts List',
      description: 'Contacts List',
      img: 'contacts-list'
    },
    {
      name: 'Contacts Grid',
      description: 'Contacts Grid',
      img: 'contacts-grid'
    },
    {
      name: 'Contacts Details',
      description: 'Contacts Details',
      img: 'contact-details-personal'
    },
    {
      name: 'CRM Dashboard',
      description: 'CRM Dashboard',
      img: 'dashboard-crm'
    },
    {
      name: 'Social Dashboard',
      description: 'Social Dashboard',
      img: 'dashboard-social'
    },
    {
      name: 'Inbox',
      description: 'Inbox',
      img: 'inbox'
    },
    {
      name: 'Invoices List',
      description: 'Invoices list',
      img: 'invoices-list'
    },
    {
      name: 'Settings',
      description: 'Settings personal information',
      img: 'settings-personal'
    },
    {
      name: 'Settings',
      description: 'Settings security information',
      img: 'settings-security'
    },
    {
      name: 'Tables',
      description: 'Table showcasing row details',
      img: 'tables-row-details'
    },
    {
      name: 'Tables',
      description: 'Table allows to customize the row template easely',
      img: 'tables-templates'
    }
  ];

  swiperConfig: SwiperConfigInterface = {
    keyboard: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  @Input()
  header: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.header) {
      this.screens = [
        {
          name: 'Multiple components',
          description: 'Beautiful components',
          img: 'header'
        },
        ...this.screens
      ];
    }

    // Add the COVID-19 at the very begining
    this.screens = [
      {
        name: 'COVID-19',
        description: 'COVID-19 Dashboard',
        img: 'covid-dashboard'
      },
      ...this.screens
    ];
  }
}

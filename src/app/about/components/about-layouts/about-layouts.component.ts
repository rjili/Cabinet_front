import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prx-about-layouts',
  templateUrl: './about-layouts.component.html',
  styleUrls: ['./about-layouts.component.scss']
})
export class AboutLayoutsComponent implements OnInit {
  options: object = [
    {
      title: 'Switch between layouts',
      description: 'Easely switch between vertical & horizontal',
      icon: 'package'
    },
    {
      title: 'Configure layout',
      description: 'Configure independant options for your layout in json format',
      icon: 'server'
    },
    {
      title: 'Fixed layout vs Static',
      description: 'Configured according to your preferenes to be fixed or static',
      icon: 'navigation'
    },
    {
      title: 'Mobile enhanced',
      description: 'The layouts are carefully developed to play nicely on mobile devices',
      icon: 'globe'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

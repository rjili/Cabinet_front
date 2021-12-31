import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prx-about-proxima',
  templateUrl: './about-proxima.component.html',
  styleUrls: ['./about-proxima.component.scss']
})
export class AboutProximaComponent implements OnInit {
  benefits = [
    {
      description: 'Quickstart a project in seconds and focus on features, not on frameworks or tools',
      icon: 'send'
    },
    {
      description: 'Industrial-grade tools, ready for usage in a continuous integration environment and DevOps',
      icon: 'tool'
    },
    {
      description: 'Scalable architecture with base app template including example components, services and tests',
      icon: 'maximize'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

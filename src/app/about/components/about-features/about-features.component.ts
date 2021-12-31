import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prx-about-features',
  templateUrl: './about-features.component.html',
  styleUrls: ['./about-features.component.scss']
})
export class AboutFeaturesComponent implements OnInit {
  features: object = [
    {
      title: 'Build process',
      description: 'Optimized build and bundling process with Webpack',
      icon: 'package'
    },
    {
      title: 'Backend proxy',
      description: 'Development server with backend proxy and live reload',
      icon: 'server'
    },
    {
      title: 'Cross-browser styling',
      description: 'Cross-browser SASS with autoprefixer and browserslist',
      icon: 'navigation'
    },
    {
      title: 'Internationalization',
      description: 'Internationalization managed by ngx-translate. The translation files use the common JSON format.',
      icon: 'globe'
    },
    {
      title: 'Cache management',
      description: 'Asset revisioning for better cache management',
      icon: 'octagon'
    },
    {
      title: 'Unit testing',
      description: 'Unit tests using Jasmine, Karma and headless Chrome',
      icon: 'box'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'prx-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.scss']
})
export class AboutHeaderComponent implements OnInit {
  lightbulb = faLightbulb;

  shapes: object[] = [
    { aos: 'fade-down-right', duration: '1500', delay: '100' },
    { aos: 'fade-down', duration: '1000', delay: '100' },
    { aos: 'fade-up-left', duration: '500', delay: '200' },
    { aos: 'fade-up', duration: '500', delay: '200' }
  ];

  constructor() {}

  ngOnInit() {}
}

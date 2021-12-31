import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prx-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  @Input()
  cssClass: string;

  @Input()
  containerClass: string;

  @Input()
  id: string;

  @Input()
  fluid: true;

  constructor() {}

  ngOnInit() {}
}

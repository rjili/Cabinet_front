import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prx-about-screen',
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.scss']
})
export class AboutScreenComponent implements OnInit {
  @Input()
  name: string;

  constructor() {}

  ngOnInit(): void {}
}

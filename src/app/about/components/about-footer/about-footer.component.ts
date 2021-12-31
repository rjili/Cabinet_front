import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'prx-about-footer',
  templateUrl: './about-footer.component.html',
  styleUrls: ['./about-footer.component.scss']
})
export class AboutFooterComponent implements OnInit {
  fa: any = {
    checkCircle: faCheckCircle
  };

  constructor() {}

  ngOnInit() {}
}

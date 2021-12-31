import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutModel, LayoutService } from '@core';

@Component({
  selector: 'prx-about-demo',
  templateUrl: './about-demo.component.html',
  styleUrls: ['./about-demo.component.scss']
})
export class AboutDemoComponent implements OnInit {
  @Input()
  demo: any;

  constructor(private _router: Router, private _layout: LayoutService) {}

  ngOnInit() {}

  navigate({ link, layout }: { link: string; layout: LayoutModel }) {
    this._layout.reload(layout);

    setTimeout(() => this._router.navigate([`/${link}`]), 500);
  }
}

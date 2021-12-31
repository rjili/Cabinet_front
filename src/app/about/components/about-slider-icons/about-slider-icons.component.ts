import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'prx-about-slider-icons',
  templateUrl: './about-slider-icons.component.html',
  styleUrls: ['./about-slider-icons.component.scss']
})
export class AboutSliderIconsComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  bordered: boolean = true;

  @Input()
  edge: string;

  @Input()
  background: string;

  config: SwiperConfigInterface = {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loop: true,
    navigation: false,
    pagination: false
  };

  constructor() {}

  ngOnInit() {}
}

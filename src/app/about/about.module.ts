import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UtilsModule } from '@app/blocks/utils';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about/about.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { AboutFeaturesComponent } from './components/about-features/about-features.component';
import { AboutSelectionComponent } from './components/about-selection/about-selection.component';
import { AboutPurchaseComponent } from './components/about-purchase/about-purchase.component';
import { AboutFooterComponent } from './components/about-footer/about-footer.component';
import { AboutDemoComponent } from './components/about-demo/about-demo.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AboutNavbarComponent } from './components/about-navbar/about-navbar.component';
import { AboutSliderIconsComponent } from './components/about-slider-icons/about-slider-icons.component';
import { AboutBeautifulInterfaceComponent } from './components/about-beautiful-interface/about-beautiful-interface.component';
import { AboutAllComponentsComponent } from './components/about-all-components/about-all-components.component';
import { AboutProximaComponent } from './components/about-proxima/about-proxima.component';
import { AboutLayoutsComponent } from './components/about-layouts/about-layouts.component';
import { AboutScreenComponent } from './components/about-screen/about-screen.component';
import { AboutShowcaseScreensComponent } from './components/about-showcase-screens/about-showcase-screens.component';
import { AboutOotbComponent } from './components/about-ootb/about-ootb.component';

/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    json: () => import('highlight.js/lib/languages/json'),
    html: () => import('highlight.js/lib/languages/htmlbars')
  };
}

@NgModule({
  imports: [SharedModule, ScrollToModule.forRoot(), UtilsModule, SwiperModule, HighlightModule, AboutRoutingModule],
  declarations: [
    AboutComponent,
    AboutHeaderComponent,
    AboutFeaturesComponent,
    AboutSelectionComponent,
    AboutPurchaseComponent,
    AboutFooterComponent,
    AboutDemoComponent,
    AboutSectionComponent,
    AboutNavbarComponent,
    AboutSliderIconsComponent,
    AboutBeautifulInterfaceComponent,
    AboutAllComponentsComponent,
    AboutProximaComponent,
    AboutLayoutsComponent,
    AboutScreenComponent,
    AboutShowcaseScreensComponent,
    AboutOotbComponent
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ]
})
export class AboutModule {}

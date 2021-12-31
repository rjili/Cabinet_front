import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '../../i18n';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../@core/authentication/token.interceptor';
import { CalendarService } from './Service/Calendar.service';
import { CalendarComponent } from './List/Calendar.component';
const routes: Routes = [
  { path: 'Details', component: CalendarComponent, data: { title: extract('Calendar') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CalendarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CalendarRoutingModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '../../@shared';
import { UtilsModule } from '../../blocks/utils';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { NavigationsModule } from '../../blocks/navigations/navigations.module';
import { NgxCopyPasteModule } from 'ngx-copypaste';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../@core/authentication/token.interceptor';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProgressModule } from '../../blocks/progress/progress.module';
import { AvatarsModule } from '../../blocks/avatars/avatars.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IconsModule } from '../../blocks/icons/icons.module';
import { CalendarComponent } from './List/Calendar.component';
import { CalendarService } from './Service/Calendar.service';
import { CalendarRoutingModule } from './Calendar-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AlertsModule } from '@app/blocks/alerts/alerts.module';
import { environment } from '@env/environment';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

const defaultDropZoneConfiguration: DropzoneConfigInterface = {
  url: `${environment.serverUrl}/Calendar/uploadFile`, // Change this to your upload Calendar address
  maxFilesize: 50,
  acceptedFiles: 'application/pdf'
};

@NgModule({
  imports: [
    UtilsModule,
    NgxDatatableModule,
    SharedModule,
    NgxCopyPasteModule,
    NavigationsModule,
    CalendarRoutingModule,
    ProgressModule,
    DropzoneModule,
    AvatarsModule,
    IconsModule,
    AlertsModule,
    NgSelectModule,

    ModalModule.forRoot(),
    FullCalendarModule
  ],
  declarations: [CalendarComponent],
  providers: [
    CalendarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    // DropZone Configuration
    {
      provide: DROPZONE_CONFIG,
      useValue: defaultDropZoneConfiguration
    }
  ]
})
export class CalendarModule { }

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {
  faCheck,
  faChevronLeft,
  faCalendarAlt,
  faUserCircle,
  faCopy,
  faAd,
  faPlus,
  faMale,
  faFemale,
  faEdit,
  faUserEdit,
  faPencilAlt,
  faEye,
  faTrashAlt,
  faTrash,
  faUser,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { BaseComponent, Logger } from '../../../@core';
import { CalendarService } from '../Service/Calendar.service';
import { Avatar } from '../../../blocks/avatars/models/avatar';
import { Calendar, Appointments } from '../Model/Calendar.interface';
import { AppSettings } from '../../../app.settings';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
const logger = new Logger('NgxDtFilteringComponent');

@Component({
  selector: 'prx-Calendar',
  templateUrl: './Calendar.component.html',
  styleUrls: ['./Calendar.component.scss'],
  providers: []
})
export class CalendarComponent extends BaseComponent implements OnInit {
  @ViewChild(DatatableComponent, { static: false })
  table: DatatableComponent;
  Calendars: any;
  events: any[] = [];
  calendar = {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      meridiem: false
    },

    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]
  };
  public form: FormGroup;
  AllCalendar: any;
  icons = {
    check: faPlus,
    chevronLeft: faChevronLeft,
    calendar: faCalendarAlt,
    user: faUserCircle,
    copy: faCopy,
    male: faMale,
    female: faFemale,
    edit: faPencilAlt,
    eye: faEye,
    trash: faTrash,
    active: faUser,
    assign: faBars
  };
  rows: any[] = [];
  listSection: any[] = [];
  section: any = null;
  columns = [
    { name: 'Name' },
    { name: 'Email' },
    { name: 'Gender' },
    { name: 'Registration Date' },
    { name: 'Action' }
  ];

  constructor(
    public _Calendars: CalendarService,
    private router: Router,
    private appSetting: AppSettings,
    private formBuilder: FormBuilder
  ) {
    super();
    this.createForm();
  }

  ngOnInit(): void {
    this.isLoading = true;
    debugger;
    this.listSection = [];
    this._Calendars.GetAll().subscribe(events => {
      this.isLoading = false;
      debugger;
      events.appointments.forEach((element: Appointments) => {
        let start = moment.utc(element.time);
        let end = start.add(moment.duration(1, 'hours'));
        let title = "Test";
        let className = 'fc-event-info';
        let today = moment.utc();
        if (start.isBefore(moment(), 'day')) className = 'fc-event-warning';
        else if (end.isAfter(moment(), 'day')) className = 'fc-event-success';

        let x = moment(start).utc().format();

        end = end.add(moment.duration(-1, 'hours'));
        start = start.add(moment.duration(-1, 'hours'));

        this.events.push({ 'start': moment(start).utc().format(), 'end': moment(end).utc().format(), 'title': title, 'className': className })
      });
      console.log(events);
    });
  }
  createForm() {
    this.form = this.formBuilder.group({
      name: ['']
    });
  }
  reset() {
    this.createForm();
    this.section = null;
    this.updateFilter(this.form);
  }
  updateFilter({ value }: { value: any }) {
    logger.debug(value);
    debugger;
    this.section;
    this.rows = this.AllCalendar;
    // filter our data
    const filtered = this.rows.filter((provider: any) => {
      return provider.sectionId.toLowerCase().indexOf(this.section.id.toLowerCase()) !== -1;
    });

    // update the rows
    this.rows = filtered;

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  getAvatarFromCalendar(Calendar: any): Avatar {
    return {
      picture: this.appSetting.settings.MEDIA_Thumb_Path + Calendar.image
    };
  }
  getBackImage(Calendar: any): Avatar {
    return {
      picture: this.appSetting.settings.MEDIA_Thumb_Path + Calendar.backImage
    };
  }

  Create() {
    this.router.navigate(['/Calendar/New']);
  }
  Delete(value: any, rowIndex: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Calendar!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(
      dismiss => {
        if (dismiss.value === true) {
          this._Calendars.Delete(value).subscribe(data => {
            Swal.fire('Deleted!', 'Your Calendar has been deleted.', 'success');
            this.rows.splice(rowIndex, 1);
            this.rows = [...this.rows];
          });
        } else {
          Swal.fire('Cancelled', 'Your Calendar is safe :)', 'error');
        }
      },
      function (dismiss) {
        if (dismiss === 'cancel') {
          Swal.fire('Cancelled', 'Your Calendar is safe :)', 'error');
        }
      }
    );
  }

  onDetailToggle(event: any) { }

  toggleExpandRow(Calendar: Calendar) {
    this.table.rowDetail.toggleExpandRow(Calendar);
  }
}

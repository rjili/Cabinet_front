import { Settings } from './app.settings.model';

export class AppSettings {
  public settings = new Settings(
    'http://localhost:8080/',
    'http://localhost:8080/',
    'http://localhost:8080/Images/O/',
    'http://localhost:8080/Images/T/',

    'CITA',
    'CITA Admin'
  );
}

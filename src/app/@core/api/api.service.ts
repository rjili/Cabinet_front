import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModelMapper } from '../mapper/model-mapper';

import { Logger } from '../logger.service';
const logger = new Logger('ApiService');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public query<T>(route: string, itemType: any): Observable<T[]> {
    if (!route) {
      return;
    }

    return (
      this.http
        //.cache()
        .get<T[]>(route)
        .pipe(
          map((data: T[]) => {
            logger.debug('API Data', data);

            /**
             * Uncomment this and delete the snippet bellow in case you need to get the plan json response
             * return data;
             */

            // Here we process the Mapping attributes or decorators defined in your Class Models
            return data.map((item: T) => {
              return new ModelMapper<T>(itemType).map(item);
            });
          })
        )
    );
  }

  public get<T>(route: string, itemType: any): Observable<T> {
    if (!route) {
      return;
    }

    return (
      this.http
        //.cache()
        .get<T>(route)
        .pipe(
          map((data: T) => {
            return new ModelMapper<T>(itemType).map(data);
          })
        )
    );
  }
}

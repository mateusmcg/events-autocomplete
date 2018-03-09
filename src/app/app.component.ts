import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'

import { catchError, map, tap, startWith, switchMap, debounceTime, distinctUntilChanged, takeWhile, first } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";

import { EventsService } from './app.events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private autoCompleteControl = new FormControl();
  private filteredOptions: Observable<any[]>;

  constructor(private eventsService: EventsService) {
    this.filteredOptions = this.autoCompleteControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        switchMap(val => {
          if (val && val.length >= 2) {
            return this.getEvents(val || '')
          } else {
            return of([]);
          }
        })
      );
  }

  getEvents(val: string): Observable<any[]> {
    return this.eventsService.getEvents(val);
  }
}

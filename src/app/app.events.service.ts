import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

@Injectable()
export class EventsService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { 
        console.log(this.apiUrl);
    }

    getEvents(query): Observable<any[]> {
        return this.http.get<any>(this.apiUrl + "events?name=" + query);
    }

}
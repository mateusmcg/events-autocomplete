import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private apiUrl = "http://localhost/api";

  public myControl = "teste";

  public options = [
    { event: "buy" },
    { event: "add to card" },
    { event: "sell" },
    { event: "remove" },
    { event: "upload" },
    { event: "download" },
  ];

  constructor(private http: HttpClient) { }

  callApi() {
    console.debug("Clicou na API");
    this.http.get(this.apiUrl)
      .subscribe(result => { console.log("Sucesso!"); console.debug(result); })
    //  .pipe(tap(result => { console.log("Sucesso!"); console.debug(result); }))
  }
}

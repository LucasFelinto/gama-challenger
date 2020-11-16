import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

interface User {
  login: string;
  token: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}

  url = 'https://javatravelers-backend.azurewebsites.net/';

  public getTicket() {
    return this.http
      .get(`${this.url}tickets/list`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('myTokenUser'),
        }),
      })
      .pipe(
        map((response) => {
          let obj;
          console.log(response);
          // obj = response.map((ticket) => {
          //   const newObject = { ...ticket };
          //   newObject.flightGet = JSON.parse(ticket.flightGet);
          //   return newObject;
          //});
          return obj;
        })
      );
  }
}

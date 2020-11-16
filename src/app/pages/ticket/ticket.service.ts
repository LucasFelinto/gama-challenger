import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

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
    return this.http.get(`${this.url}tickets/list`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('myTokenUser'),
      }),
    });
  }
}

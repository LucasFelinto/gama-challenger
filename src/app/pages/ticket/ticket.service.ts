import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  token = LoginComponent.authenticationUser;

  constructor(private http: HttpClient) {}
  url = 'https://javatravelers-backend.azurewebsites.net/';

  log() {
    console.log(this.token);
  }

  public getTicket() {
    this.log();
    return this.http.get(`${this.url}tickets/list`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
      }),
    });
  }
}

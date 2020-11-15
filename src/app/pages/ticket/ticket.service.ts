import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private httpClient: HttpClient) {}
  url = 'https://javatravelers-backend.azurewebsites.net/';

  public getTicket() {
    return this.httpClient.get(`${this.url}tickets/list`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJjb3Ntb250ZWlyb0BnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1VTRVIiLCJpYXQiOjE2MDU0NjY2MjgsImV4cCI6MTYwNTQ3MDIyOH0.H9qIE7kuYqn_DhdMBO3KxwGCqOsEOujsuFPdTEjB-us",
      }),
    });
  }
}

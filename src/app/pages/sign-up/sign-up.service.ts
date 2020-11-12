import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  url = 'https://javatravelers-backend.azurewebsites.net/';
  
  constructor(private httpClient: HttpClient) { 
  }

  createUser(data) {
    return this.httpClient.post(`${this.url}signup`, data, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    });
  }
}

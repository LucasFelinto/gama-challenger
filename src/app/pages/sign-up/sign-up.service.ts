import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  url = 'https://javatravelers-backend.azurewebsites.net/v2/api-docs';
  
  constructor(private httpClient: HttpClient) { 
  }

  createUser(data) {
    return this.httpClient.post(`${this.url}/signup`, data);
  }
}

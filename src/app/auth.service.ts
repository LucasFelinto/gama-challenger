import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _login = 'https://javatravelers-backend.azurewebsites.net/login';
  constructor(private http: HttpClient) {}

  loginUser(user) {
    return this.http.post<any>(this._login, user);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

interface User {
  login: string;
  token: string;
  userId: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  theLogin(nome, senha) {
    this.authService
      .loginUser({
        senha: senha,
        usuario: nome,
      })
      .subscribe(
        (res) => {
          localStorage.setItem('myTokenUser', res.token);
        },
        (err) => console.log(err)
      );
  }
}

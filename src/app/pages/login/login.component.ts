import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

interface User {
  usuario: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  static authenticationUser: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  method() {}

  theLogin(nome, senha) {
    this.authService
      .loginUser({
        senha: senha,
        usuario: nome,
      })
      .subscribe(
        (res) => {
          LoginComponent.authenticationUser = res;
        },
        (err) => console.log(err)
      );
  }
}

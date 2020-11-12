import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from './sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  mask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  fields = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    cpf: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]),
    login: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    confirmacaoSenha: new FormControl('', [Validators.required]),
  });

  constructor(private signUpService: SignUpService) {
  }

  ngOnInit(): void {
  }

  createUser(data) {
    this.signUpService.createUser(data).subscribe(result => console.log(result), erro => console.log(erro));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { nome, email, cpf, login, senha } = this.fields.value;
    this.createUser({
      nome,
      email,
      cpf: Number.parseInt(cpf.replace(/[.]/g, "").replace("-", "")),
      login,
      senha
    });
  }
}

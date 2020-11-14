import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  contacts = [
    {
      img: "https://avatars0.githubusercontent.com/u/44682965?s=150&u=56ce7a795631303b25348ecd7d85a11ac51d04c0&v=4",
      name: "Tácio Antônio",
      github: "https://github.com/TacioAntonio",
      email: "tacioantonio10@gmail.com"
    },
    {
      img: "https://avatars0.githubusercontent.com/u/58551483?s=150&u=1571a94aa96fcac9d742b207b1ebd7254eaa2123&v=4",
      name: "Markus Dennys",
      github: "https://github.com/markDennys",
      email: "markusDennys@gmail.com"
    },
    {
      img: "https://avatars2.githubusercontent.com/u/47856850?s=150&u=17577c29a2171306ed5d41c3b7c38694f8c94ca6&v=4",
      name: "Lucas Felinto",
      github: "https://github.com/LucasFelinto",
      email: "elucasfelinto@gmail.com"
    },
    {
      img: "https://avatars2.githubusercontent.com/u/1188951?s=150&v=4",
      name: "João Gabriel",
      github: "https://github.com/joaogabriel",
      email: "joaogabriel@gmail.com"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

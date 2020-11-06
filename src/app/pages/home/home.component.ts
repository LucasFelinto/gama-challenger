import { Component } from '@angular/core';

@Component({
  selector: 'eve-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent    {
  imgPath: string = "/assets/airplane.png"
  buttonClass: boolean = true
}

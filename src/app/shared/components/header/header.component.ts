import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
headerOpen: boolean = false

openHeader(){
  this.headerOpen = !this.headerOpen
}
}

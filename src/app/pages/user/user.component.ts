import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent   {

  constructor() { }

  ngOnInit(): void {
  }

  edit: boolean = false

  userName: string = "Markus Dennys"
  userEmail: string = "markus.dennys.vilela@accenture.com"
  userNumber: string = "(81) 9 8728-1088"

    openEdit(){
      this.edit = !this.edit
    }
    closeEditModal(){
      this.edit = !this.edit
    }
}

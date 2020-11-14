import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent   {

  user= {
    userPic: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
    userfName: "Markus",
    usersName:"Dennys",
    userEmail:  "markus.dennys.vilela@accenture.com",
    userNumber: "(81) 9 8728-1088",
    userCountry: "Brazil",
    edit: false
  }



    openEdit(){
      this.user.edit = !this.user.edit
      
    }
    closeEditModal(){
      this.user.edit = !this.user.edit
    }
}

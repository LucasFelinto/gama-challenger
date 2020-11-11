import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import {MatButtonModule} from '@angular/material/button';
import {EditModule} from './edit/edit.module'

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    EditModule
  ],
  exports:[
    UserComponent
  ]
})
export class UserModule { }
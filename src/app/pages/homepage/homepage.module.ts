import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';

@NgModule({
declarations:[
  HomepageComponent
]
 ,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule
  ],
 exports:[
   HomepageComponent
 ]
})
export class HomepageModule { }

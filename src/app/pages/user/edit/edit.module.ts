import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditComponent } from './edit.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

  ],
  exports:[
    EditComponent
  ]
})
export class EditModule { }
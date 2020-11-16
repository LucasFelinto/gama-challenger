import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule
    ,RouterModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }

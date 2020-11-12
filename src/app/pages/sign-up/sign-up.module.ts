import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { SignUpService } from './sign-up.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextMaskModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule
  ],
  exports:[
    SignUpComponent
  ]
 ,
  providers: [SignUpService]
})
export class SignUpModule { }

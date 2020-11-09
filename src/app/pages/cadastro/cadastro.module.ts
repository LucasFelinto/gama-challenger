import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro.component';

const routes : Routes = [
  {
    path:'',
    component : CadastroComponent
  },
]


@NgModule({
  declarations: [
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class CadastroModule { }

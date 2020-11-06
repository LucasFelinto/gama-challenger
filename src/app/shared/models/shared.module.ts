import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsComponent } from '../components/buttons/buttons.component';
import { WavesComponent } from '../components/waves/waves.component';




@NgModule({
  declarations: [
    ButtonsComponent,
    WavesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
exports:[
  ButtonsComponent, 
  WavesComponent
]
})
export class SharedModule { }

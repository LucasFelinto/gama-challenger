import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WavesComponent } from '../components/waves/waves.component';




@NgModule({
  declarations: [
    WavesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
exports:[
  WavesComponent
]
})
export class SharedModule { }

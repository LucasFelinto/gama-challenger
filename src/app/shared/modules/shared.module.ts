import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FooterComponent } from '../components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations:[
        FooterComponent
    ],
    imports: [
        CommonModule,
       
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
        
    ],
   exports:[
       FooterComponent
   ]
})

export class SharedModule{ }
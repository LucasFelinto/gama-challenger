import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FooterComponent } from '../components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        RouterModule

    ],
   exports:[
       FooterComponent,
       HeaderComponent
   ]
})

export class SharedModule{ }
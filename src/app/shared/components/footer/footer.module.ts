import { NgModule } from "@angular/core";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { FooterComponent } from './footer.component';

@NgModule({
    declarations:[
        FooterComponent
    ],
    imports:[
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,

    ]
})

export class FooterModule{}
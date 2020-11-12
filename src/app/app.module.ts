import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './pages/user/user.module';
import {MatMenuModule} from '@angular/material/menu';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from './shared/modules/shared.module';
import {TicketComponent} from './pages/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    MatMenuModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


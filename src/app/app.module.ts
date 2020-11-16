import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './pages/user/user.module';
import { SharedModule } from './shared/modules/shared.module';
import { TicketComponent } from './pages/ticket/ticket.component';
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { MatMenuModule } from '@angular/material/menu';
import { TicketModule } from './pages/ticket/ticket.module';
import { RouterModule } from '@angular/router';
import { HomepageModule } from './pages/homepage/homepage.module';
import { ContatoComponent } from './pages/contato/contato.component';
import {LoginModule} from './pages/login/login.module'

@NgModule({
  declarations: [AppComponent, TicketComponent, ContatoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    SharedModule,
    SignUpModule,
    MatMenuModule,
    TicketModule,
    RouterModule,
    HomepageModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

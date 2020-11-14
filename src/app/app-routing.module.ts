import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }, 
  {
    path: 'cadastro',
    component: SignUpComponent
  },  
  {
    path: 'perfil',
    component: UserComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



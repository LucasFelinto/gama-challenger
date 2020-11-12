import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }, 
  {
    path: 'cadatro',
    component: SignUpComponent
  },  
  {
    path: 'perfil',
    component: UserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

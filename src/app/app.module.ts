import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  {
    path:'',
    loadChildren:() => import('./pages/home/home.module').then(mod => mod.HomeModule )
  },
  {
    path:'cadastro',
    loadChildren:() => import('./pages/cadastro/cadastro.module').then(mod => mod.CadastroModule )
  },
  {
    path:'login',
    loadChildren:() => import('./pages/login/login.module').then(mod => mod.LoginModule )
  },
  
]

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

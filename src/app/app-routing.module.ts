import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

//Configurar las rutas de mi app
const routes: Routes =[
  //rutas protegidas
  {
    path:'', 
    component: PagesComponent,

    //rutas hijas
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'grafica1', component: Grafica1Component},
      {path: '', redirectTo:'/dashboard', pathMatch:'full'},
    ]
  },

  //rutas publicas
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: '**', component: NopagefoundComponent},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

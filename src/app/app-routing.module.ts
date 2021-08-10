import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';


//Configurar las rutas de mi app
const routes: Routes =[
  

  //rutas publicas

  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path: '**', component: NopagefoundComponent},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

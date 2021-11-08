import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationsComponent } from './components/publications/publications.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


const routes: Routes = [
  {path:'', component:UsuariosComponent},
  {path:'registro', component:RegistroComponent}, 
  {path:'editar/:id', component:RegistroComponent}, 
  {path:'publications', component:PublicationsComponent},
  {path:'edit/:id', component:PublicationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

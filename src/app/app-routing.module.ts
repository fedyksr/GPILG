import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './Ordinateur/ajout/ajout.component';
import { EditerComponent } from './Ordinateur/editer/editer.component';
import { ListeComponent } from './Ordinateur/liste/liste.component';

const routes: Routes = [
  {path:'liste',component:ListeComponent},
  {path:'ajout',component:AjoutComponent},
  {path:'editer',component:EditerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './Ordinateur/liste/liste.component';
import { AjoutComponent } from './Ordinateur/ajout/ajout.component';
import { EditerComponent } from './Ordinateur/editer/editer.component';
import { FormsModule } from '@angular/forms';
import { ServiceOrdinateurService } from './Service/Service-Ordinateur/service-ordinateur.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AjoutComponent,
    EditerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceOrdinateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }

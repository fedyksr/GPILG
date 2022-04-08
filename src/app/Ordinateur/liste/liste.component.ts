import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordinateur } from 'src/app/modele/ordinateur';
import { ServiceOrdinateurService } from 'src/app/Service/Service-Ordinateur/service-ordinateur.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  ordinateurs!:Ordinateur[];
  constructor(private service:ServiceOrdinateurService, private router:Router) { }

  ngOnInit() {
    this.service.getOrdinateurs()
    .subscribe(data=>{this.ordinateurs=data;})
  }

  Editer(ordinateur:Ordinateur){
    localStorage.setItem("idOrdinateur",ordinateur.idOrdinateur.toString());
    this.router.navigate(["editer"]);
  }
}

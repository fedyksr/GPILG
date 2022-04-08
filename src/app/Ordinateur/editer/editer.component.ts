import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordinateur } from 'src/app/modele/ordinateur';
import { ServiceOrdinateurService } from 'src/app/Service/Service-Ordinateur/service-ordinateur.service';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  idOrdinateur!: number;
  ordinateur: Ordinateur=new Ordinateur;
  constructor(private router:Router, private service:ServiceOrdinateurService) { }

  ngOnInit() {
    this.service.getOrdinateurById(this.idOrdinateur).subscribe(data=>
      { console.log(data)
        this.ordinateur=data;
      },error=>console.log(error));
  }

  updateOrdinateur(){
    this.service.updateOrdinateur(this.ordinateur).subscribe(data=>
      { console.log(data);
        this.ordinateur=new Ordinateur();
        this.goToOrdinateurList();},
        error=>console.log(error));
  }

  goToOrdinateurList(){
    this.router.navigate(["liste"])
  }

  onSubmit(){
    this.updateOrdinateur();
  }

}

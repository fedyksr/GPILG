import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOrdinateurService } from '../../Service/Service-Ordinateur/service-ordinateur.service';
import { Ordinateur } from '../../modele/ordinateur';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  ordinateur: Ordinateur=new Ordinateur;
  constructor(private router:Router,private service:ServiceOrdinateurService) { }

  ngOnInit(){
  }



  saveOrdinateur(){
    this.service.createOrdinateur(this.ordinateur).subscribe(data=>{
      console.log(data);
      this.goToOrdinateurList();
    },
    error=>console.log(error));
  }


  goToOrdinateurList(){
    this.router.navigate(['liste'])
  }

  onSubmit(){
    console.log(this.ordinateur);
    this.saveOrdinateur();
  }

}

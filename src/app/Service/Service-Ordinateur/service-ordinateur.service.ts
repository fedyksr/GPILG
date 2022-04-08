import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Ordinateur } from 'src/app/modele/ordinateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceOrdinateurService {


  constructor(private http:HttpClient) { }

  Url='http://localhost:8081/apiOrdinateur';

  getOrdinateurs():Observable<Ordinateur[]>{
    return this.http.get<Ordinateur[]>(this.Url);
  }

  createOrdinateur(ordinateur:Ordinateur):Observable<Ordinateur>{
    return this.http.post<Ordinateur>(this.Url,ordinateur);
  }

  getOrdinateurById(idOrdinateur:number):Observable<Ordinateur>{
    return this.http.get<Ordinateur>(this.Url+"/"+idOrdinateur);
  }

  updateOrdinateur(ordinateur:Ordinateur){
    return this.http.put<Ordinateur>(this.Url+"/"+ordinateur.idOrdinateur,ordinateur);
  }
}

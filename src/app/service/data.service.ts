import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'
//Ici on a crée ce service pour pouvoir communiquer avec l'api rest
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) { }
  //ici nous allons creer une methode registerUser qui retourne 
  // une réponse qui provient de l'API, en fonction des
  // données qui ont été envoyé  
  registerUser(data: any){
    return this.http.post(environment.apiUrl+'/api/register',data);
    
  }
  
  login(data: any){
    return this.http.post(environment.apiUrl+'/api/login',data);
    
  }
}

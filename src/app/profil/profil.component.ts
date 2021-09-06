import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import {Router} from'@angular/router';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  lastName: string;
  firstName: string;
  email: string;
  files: string[];
  showFiles: boolean;
  
  token:any;
userData:any;
nom:any;
mail:any;



  profil=[];
  fichiers=[];

  constructor(private http: HttpClient,private router:Router){ //injecte Http de type HttpClient dans BddComponent
    this.http.get('http://localhost/Editor/bdd.php').subscribe(profil=>{ // Permet de souscrire et d'être notifié des nouvelles valeurs, des erreus ou de la fin du "steam"
      this.profil.push(profil); // ajoute les élements à la fin de data et retourne la nouvelle taille du tableau
      console.log(this.profil);
      this.lastName = profil[0].nom;
      this.firstName = profil[0].prenom;
      this.email = profil[0].mail;
    }, error => console.error(error));
    this.http.get('http://localhost/Editor/bddFichiers.php').subscribe(fichiers=>{ // Permet de souscrire et d'être notifié des nouvelles valeurs, des erreus ou de la fin du "steam"
      this.fichiers.push(this.fichiers); // ajoute les élements à la fin de data et retourne la nouvelle taille du tableau
      console.log(this.fichiers);
      this.files = [fichiers[0].nom,fichiers[1].nom];
    }, error => console.error(error));

      this.showFiles = false;

  }


  toggleFiles(){
    if(this.showFiles == true){
      this.showFiles = false;
    }else{
      this.showFiles = true;
    }
  }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.userData=jwt_decode(this.token);
    console.log(this.token);
    console.log(this.userData);
    this.nom=this.userData.name;
    this.mail=this.userData.email;
  }


}

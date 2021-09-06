import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  token:any;
  userData:any;
  nom:any;
  constructor() {
  }

// Ici on décode le token afin d'afficher le nom de l'utilisateur dans la page d'acceuil
  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.userData=jwt_decode(this.token);
    console.log(this.token);
    console.log(this.userData);
    this.nom=this.userData.name;
  }
}

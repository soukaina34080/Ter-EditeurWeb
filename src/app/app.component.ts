import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'EasyEditor';

  constructor(private router:Router) {
  }

  isAuth=true;

  view(){
    console.log(this.isAuth);
  }

  login(){
    this.isAuth=true;
  }

  signOut(){
    this.isAuth=false;
    console.log(this.isAuth);
  }

  goProfil(){
    this.router.navigate(['profil']);
  }

}


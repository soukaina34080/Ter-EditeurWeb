import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {DataService} from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup ;
  submitted=false;
  data:any;
  token:any;
  constructor(private formBuilder:FormBuilder,private dataservice:DataService,private toastr:ToastrService,private router:Router) { }


  ngOnInit(): void {
    this.createForm();

  }
  createForm() {
    this.form =this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]

    })
  }
  get f() {
    return this.form.controls;
  }

  submit(){
    this.submitted=true;
    if(this.form.invalid){
      return;}
    this.dataservice.login(this.form.value).subscribe(res => {
      this.data=res;
        //console.log(res);
        if(this.data.status===1){
          this.token=this.data.data.token;
          localStorage.setItem('token',this.token);
          this.toastr.success(JSON.stringify(this.data.message));
          this.router.navigate(['profil']);
        }
        else{
          if(this.data.status===0){
            this.toastr.error(JSON.stringify(this.data.message));

          }
        }

    });
      }




}

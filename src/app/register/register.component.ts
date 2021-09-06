import { Component, OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators,} from '@angular/forms';
import {DataService} from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 form!: FormGroup ;
 submitted=false;
 data:any;
  constructor(private formBuilder:FormBuilder,private dataservice:DataService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void{
    this.createForm();

   }
  createForm() {
    this.form =this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,Validators.required,Validators.email],
      password:[null,Validators.required],
      passwordConfirm:[null,Validators.required]
    })

 }


 get f() {
   return this.form.controls;
 }
  submit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    this.dataservice.registerUser(this.form.value).subscribe(res => {
      this.data=res;
      if(this.data.status==1){
        this.toastr.success(JSON.stringify(this.data.message)
        );
      }
      else{
        this.toastr.error(JSON.stringify(this.data.message));
      }
    });
  }
  


}

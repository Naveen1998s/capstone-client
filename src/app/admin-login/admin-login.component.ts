import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {UserServiceService} from '../service/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  componentName:"admin-login"
  val: any = "password";
  eye: any = "fa fa-eye-slash"
  value: any
  loginForm: FormGroup;

  toggle() {
    if (this.val === "password") {
      this.val = "text"
      this.eye = "fa fa-eye"

    } else {
      this.val = "password"
      this.eye = "fa fa-eye-slash"
    }
  }
  constructor(private service: UserServiceService, private route: Router) { }
  result: any
  ngOnInit() {
    this.loginForm = new FormGroup({
     
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)]),
     
    })

  }
  
  get email() {

    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  res:any
  login(){
  console.log(this.loginForm.value);
  this.service.logData(this.loginForm.value).subscribe(data=>{
    console.log(this.res=data);
    localStorage.setItem("role", this.res.data.role)
      localStorage.setItem("token", this.res.data.token)
    if(this.res.data.role === 'admin'){
     this.route.navigate(['samples'])}
     else{
     
      this.route.navigate(['sample-user'])  
    }
    
  })

}}

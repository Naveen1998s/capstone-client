import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {UserServiceService} from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  value: any
  loginForm: FormGroup;
  val: any = "password";
  eye: any = "fa fa-eye-slash"

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
      fname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      role: new FormControl('', [Validators.required])
    })

  }
  get fname() {
    return this.loginForm.get('fname');
  }
  get lname() {
    return this.loginForm.get('lname');
  }
  get email() {

    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  get role() {
    return this.loginForm.get('role');
  }
  login(){
    console.log(this.loginForm.value);
    this.service.regData(this.loginForm.value).subscribe((data) => {
      this.result = data
      console.log(this.result)
    })
  }

}

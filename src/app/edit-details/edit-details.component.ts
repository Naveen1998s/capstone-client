import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../service/user-service.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {NgForm}  from '@angular/forms';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  constructor( private rout: ActivatedRoute,private service: UserServiceService,private router:Router) { }
  result: any
  SelectedUser: any
  val: any
  ngOnInit(): void {

    let id = this.rout.snapshot.params._id
    console.log(id);
    this.service.getData().subscribe((data) => {
      this.result = data
      this.result = this.result.data.samples
      // console.log(this.result.data.samples);

      for (let res of this.result) {
        if (res._id === id) {
          this.SelectedUser = res
          console.log(this.SelectedUser.fname);
          
        }
      }
    })
  }
  getUser(form: NgForm) {
  console.log(form.value);

  let {fname,email}=form.value
  
    
    this.service.updateUser({_id:this.SelectedUser._id,fname:fname,email:email}).subscribe((res) => {
      console.log(res);
    })
    this.router.navigate(["/samples"])

}}
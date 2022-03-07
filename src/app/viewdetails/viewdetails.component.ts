import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../service/user-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  gluco: any;
  haemo: any;
  data1: any;
  constructor(private service: UserServiceService, private route: Router) { }

  result: any
  ngOnInit() {
    this.service.fetchSample().subscribe((data) => {
      console.log(data)
      this.result = data
      console.log(this.result.data);
      this.haemo = this.result.data[0].haemotology
      this.gluco = this.result.data[0].glucometry

      console.log(this.haemo);
      console.log(this.gluco);

    
    })
}}

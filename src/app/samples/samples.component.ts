import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../service/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  constructor(private service: UserServiceService) { }
  
  firstname: string = ''

    result: any = []

  ngOnInit() {
    this.service.getData().subscribe(data => {
      console.log(data);
      this.result = data
      
      console.log(this.result.data.samples)
    })
  }
//   Search(){
//     if(this.fname == ""){
//       this.ngOnInit();
//     }else{
//       this.result = this.result.filter((res: {fname: string; }) =>{
//         return res.fname.toLocaleLowerCase().match(this.fname.toLocaleLowerCase());
//       });
//     }
// }
  }



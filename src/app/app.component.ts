import { Component } from '@angular/core';
import {UserServiceService} from './service/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  
  constructor(public service: UserServiceService,private router: Router){}
  logout(){
    localStorage.clear();
  }
}

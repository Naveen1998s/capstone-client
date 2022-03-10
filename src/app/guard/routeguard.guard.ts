import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardGuard implements CanActivate {
  constructor(private route: Router){}
  canActivate(){
    if (localStorage.getItem('token') && localStorage.getItem('role')==='admin') {
     
      return true
    }
    else{
     
      return false
    }
  }
   
}

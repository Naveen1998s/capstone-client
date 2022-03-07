import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {
    // this.getData();
  }
  //submit data
  regData(reg: any) {
    return this.http.post('http://localhost:4000/users/register', reg)
  }

  //login regData
  logData(login: any) {

    return this.http.post('http://localhost:4000/users/login', login)

  }
  getData() {
    return this.http.get('http://localhost:4000/users/users')
  }
  updateUser(login:any){
    return this.http.put<any>('http://localhost:4000/users/getUser/',login)
  }
  fetchSample() {
    return this.http.get<any>("http://localhost:4000/users/editdetails")
  }
  
  }

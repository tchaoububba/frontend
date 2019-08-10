import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  connectedUser: User;
    constructor(private _httpService: HttpClient) {}

    loginAuthentication(user:User): Observable<any>{
      let body = JSON.parse(JSON.stringify(user));
      console.log(body);
      // Remember to change URL

      return this._httpService.post("http://desktop-osghs5h:9009/user-ws/api/login", body);
    }

    register(user: User) {
      console.log("Before enter register");
      return this._httpService.post("http://desktop-osghs5h:9009/user-ws/api/user",user);
    }
  
    setConnectedUser(user) {
      this.connectedUser = user;
      localStorage.setItem('connectedUser',JSON.stringify(user));
  
    }
}
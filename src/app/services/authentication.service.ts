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
      return this._httpService.post("http://desktop-tpu8n71:8011/api/login", body);
    }

    register(user: User) {
      return this._httpService.post("http://desktop-tpu8n71.home:8989/api/User/",user);
    }
  
    setConnectedUser(user) {
      this.connectedUser = user;
      localStorage.setItem('connectedUser',JSON.stringify(user));
  
    }
}
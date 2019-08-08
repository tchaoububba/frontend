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
<<<<<<< HEAD
      return this._httpService.post("http://desktop-tpu8n71:8011/api/login", body);
    }

    register(user: User) {
      return this._httpService.post("http://desktop-tpu8n71.home:8989/api/User/",user);
=======
      return this._httpService.post("http://figueroa:9009/user-ws/api/login", body);
    }

    register(user: User) {
      console.log("Before enter register");
      return this._httpService.post("http://figueroa:9009/user-ws/api/user",user);
>>>>>>> fa1c9268b439eca10be21be27c3b3a15366ea04c
    }
  
    setConnectedUser(user) {
      this.connectedUser = user;
      localStorage.setItem('connectedUser',JSON.stringify(user));
  
    }
}
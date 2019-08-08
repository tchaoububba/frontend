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

      return this._httpService.post("http://desktop-tpu8n71:9009/user-ws/api/login", body);
=======
      return this._httpService.post("http://desktop-osghs5h:9009/user-ws/api/login", body);
>>>>>>> 2882fe476853dabf62ec0aefe7ab92f62cf611ce
    }

    register(user: User) {
      console.log("Before enter register");
<<<<<<< HEAD
      return this._httpService.post("http://desktop-tpu8n71:9009/user-ws/api/user",user);

    } 
=======
      return this._httpService.post("http://desktop-osghs5h:9009/user-ws/api/user",user);
    }
>>>>>>> 2882fe476853dabf62ec0aefe7ab92f62cf611ce
  
    setConnectedUser(user) {
      this.connectedUser = user;
      localStorage.setItem('connectedUser',JSON.stringify(user));
  
    }
}
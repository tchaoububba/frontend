import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointsService } from '../constants/endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  /** HTTP Headers to be used in HTTP requests */
  private readonly HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  connectedUser: User;
    constructor(private _httpService: HttpClient,
      private endpoints: EndpointsService) {}

    loginAuthentication(user:User): Observable<any>{
      let body = JSON.parse(JSON.stringify(user));
      console.log(body);
      // Remember to change URL


      return this._httpService.post(this.endpoints.LOGIN_USER, body);

    }

    register(user: User) {
      console.log("Before enter register");

      return this._httpService.post(this.endpoints.REGISTER_USER, user);

    } 
  
    setConnectedUser(user) {
      this.connectedUser = user;
      localStorage.setItem('connectedUser',JSON.stringify(user));
  
    }

    reset(email: String) {
      const user = {
        email: email
      };
      return this._httpService.post<User>(this.endpoints.RESET_PASSWORD, user);
    }
}
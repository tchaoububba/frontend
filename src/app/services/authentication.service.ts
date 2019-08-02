import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private _httpService: HttpClient) {}

    loginAuthentication(user:User): Observable<any>{
      let body = JSON.parse(JSON.stringify(user));
      console.log(body);
      // Remember to change URL
      return this._httpService.post("http://localhost:8090/Buy_Stuffs/LoginController/logon", body);
    }

}
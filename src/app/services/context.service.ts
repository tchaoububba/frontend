import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { setInjectImplementation } from '@angular/core/src/di/injector_compatibility';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor() { }

  private tokenKeyRole:string = "tokenKeyRole";
  // private tokenKeyFullName:string = "tokenKeyFullName";
  // private tokenKeyEmail:string = "tokenKeyEmail";

    store(user:User) {
        localStorage.setItem(this.tokenKeyRole, user.role);
        // localStorage.setItem(this.tokenKeyFullName, user.firstName+" "+user.lastName);
        // localStorage.setItem(this.tokenKeyEmail, user.email);
    }

    retrieveTokenRole() {
        let storedTokenRole:string = localStorage.getItem(this.tokenKeyRole);
        return storedTokenRole;
    }

    // retrieveTokenFullName() {
    //     let storedTokenFullName:string = localStorage.getItem(this.tokenKeyFullName);
    //     return storedTokenFullName;
    // }

    // retrieveTokenEmail() {
    //     let storedTokenEmail:string = localStorage.getItem(this.tokenKeyEmail);
    //     return storedTokenEmail;
    // }

    clear() {
        localStorage.removeItem(this.tokenKeyRole);
        // localStorage.removeItem(this.tokenKeyFullName);
        // localStorage.removeItem(this.tokenKeyEmail);
    }

    private user = new User();

    setUser(user: User) {
        this.user = user;
    }

    getUser():User {
        return this.user;
    }
}

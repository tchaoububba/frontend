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
  private tokenKeyId:string = "tokenKeyId";
  // private tokenKeyFullName:string = "tokenKeyFullName";
  // private tokenKeyEmail:string = "tokenKeyEmail";

    store(user:User) {
        localStorage.setItem(this.tokenKeyRole, user.role);
        localStorage.setItem(this.tokenKeyId, user.id.toString());
        // localStorage.setItem(this.tokenKeyFullName, user.firstName+" "+user.lastName);
        // localStorage.setItem(this.tokenKeyEmail, user.email);
        console.log("REMEMBER TO REMOVE THE BELOW LINES IN CONTEXT.SERVICE.TS")
        console.log("Stored Role: "+localStorage.getItem(this.tokenKeyRole)+" and ID: "+localStorage.getItem(this.tokenKeyId));
    }

    retrieveTokenRole() {
        let storedTokenRole:string = localStorage.getItem(this.tokenKeyRole);
        return storedTokenRole;
    }

    retrieveTokenId() {
        let storedTokenId:number = parseInt(localStorage.getItem(this.tokenKeyId));
        return storedTokenId;
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
        localStorage.removeItem(this.tokenKeyId);
        // localStorage.removeItem(this.tokenKeyFullName);
        // localStorage.removeItem(this.tokenKeyEmail);
        localStorage.setItem("login","false")
    }

    private user = new User();

    setUser(user: User) {
        this.user = user;
    }

    getUser():User {
        return this.user;
    }
}

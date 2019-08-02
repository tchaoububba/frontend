import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';
// import { AppComponent } from '../app.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email;
  private password;
  userToLog = new User();
  loggedUser = new User();
  statusMessage:string;

  constructor(
    private router:Router,
    private _authenticationService:AuthenticationService,
    // public _appComponent:AppComponent,
    private _contextService:ContextService
  ) { }

  ngOnInit() {
    console.log("login Init role: "+this._contextService.retrieveTokenRole()); 
    if (this._contextService.retrieveTokenRole() != null) {
      this.router.navigateByUrl('reports');
    }
  }

  loginSubmit() {
    console.log("Email: "+this.userToLog.email);
    console.log("Password: "+this.userToLog.password);

    this._authenticationService.loginAuthentication(this.userToLog).subscribe((userData) => {
        this.loggedUser = <User>userData; this.loginAuthorization(this.loggedUser);
      }
    ),
    (error) => {
      console.log(error);
      this.statusMessage = "Problem with service. Please try again later.";
    }
  }

  loginAuthorization(user: User){
    if (user != null) {
      this._contextService.store(user);
      console.log("Set User");
      console.log(this.loggedUser);
      this.router.navigateByUrl('reports')
    } else {
      this.reset();
    }
  }

  private reset(){
    this.userToLog.email = null;
    this.userToLog.password = null;
  }

}

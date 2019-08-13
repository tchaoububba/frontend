import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';

/**@ignore */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _contextService:ContextService) { }

  /**@ignore */
  ngOnInit() {
  }

  logout() {
    this._contextService.clear();
  }

//Checking if logged in and checking if QC

  ifLoggedIn(){
    if( localStorage.getItem("login")=="true"){
      return true;
    }
    else{
      return false;
    }
  }

  ifQC(){
    if(this._contextService.retrieveTokenRole()=="QC"){
      return true;
    }
    else{
      return false;
    }
  }

}

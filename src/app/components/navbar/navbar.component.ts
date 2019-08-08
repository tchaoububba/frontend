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

}

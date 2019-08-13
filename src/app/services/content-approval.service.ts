import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointsService } from '../constants/endpoints.service';
import { Filter } from '../models/Filter';
import { Content } from '../models/Content';

@Injectable({
  providedIn: 'root'
})

//DEPRECATED! Approving and Denying methods are now in the content fetcher service, use that instead!
export class ContentApprovalService {

  private readonly HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private _httpService:HttpClient,
    private endpoints: EndpointsService) { }

  filterContent(filter: Filter): Observable<Content[]> {
    let body: string = JSON.stringify(filter);
    return this._httpService.post<Content[]>(this.endpoints.FILTER_CONTENT, body, { headers: this.HEADERS });
 }

  approve(contentId:number) {
    return this._httpService.get(this.endpoints.APPROVE_CONTENT.replace('${id}', contentId.toString()));
  }

  deny(contentId:number) {

    return this._httpService.get(this.endpoints.DENY_CONTENT.replace('${id}', contentId.toString()));
  }

}

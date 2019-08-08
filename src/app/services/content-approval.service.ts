import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentApprovalService {

  constructor(private _httpService:HttpClient) { }

  // REMEMBER TO FIX URLS=================================================
  getAllContent():Observable<any>{
    return this._httpService.get("http://desktop-tpu8n71:9002/cmsforce/content/")
  }

  approve(contentId:number) {
    return this._httpService.get("http://desktop-tpu8n71:9002/cmsforce/content/"+contentId+"/true");
  }

  deny(contentId:number) {
    return this._httpService.get("http://desktop-tpu8n71:9002/cmsforce/content/"+contentId+"/false");
  }
}

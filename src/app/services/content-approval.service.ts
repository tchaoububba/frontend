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
<<<<<<< HEAD
    return this._httpService.get("http://desktop-tpu8n71:9002/cmsforce/content/")
  }

  approve(contentId:number) {
    return this._httpService.get("http://desktop-tpu8n71:9002/cmsforce/content/"+contentId+"/true");
  }

  deny(contentId:number) {
    return this._httpService.get("http://desktop-tpu8n71:9002/cmsforce/content/"+contentId+"/false");
=======
    return this._httpService.get("http://desktop-osghs5h:8989/cmsforce/content/")
  }

  approve(contentId:number) {
    return this._httpService.get("http://desktop-osghs5h:8989/cmsforce/content/"+contentId+"/true/");
  }

  deny(contentId:number) {
    return this._httpService.get("http://desktop-osghs5h:8989/cmsforce/content/"+contentId+"/false/");
>>>>>>> fa1c9268b439eca10be21be27c3b3a15366ea04c
  }
}

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
=======
    return this._httpService.get("http://desktop-osghs5h:9002/cmsforce/content/")
>>>>>>> 2882fe476853dabf62ec0aefe7ab92f62cf611ce
  }

  approve(contentId:number) {
    return this._httpService.get("http://desktop-osghs5h:9002/cmsforce/content/"+contentId+"/true/");
  }

  deny(contentId:number) {
<<<<<<< HEAD
    return this._httpService.get("http://desktop-tpu8n71:9002/cmsforce/content/"+contentId+"/false");
  }

}
=======
    return this._httpService.get("http://desktop-osghs5h:9002/cmsforce/content/"+contentId+"/false/");
  }
}
>>>>>>> 2882fe476853dabf62ec0aefe7ab92f62cf611ce

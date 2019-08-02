import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from '../models/Module';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { EndpointsService } from '../constants/endpoints.service';

/** Manages Modules between Angular and back-end */
@Injectable({
   providedIn: 'root'
})
export class ModuleFetcherService {
   /** HTTP Headers to be used in HTTP requests */
   private readonly HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });

   /**
    * Initialize Service
    * @param http Client to send requests to back-end
    * @param endpoints Endpoints of back-end to send requests to
    */
   constructor(
      private http: HttpClient,
      private endpoints: EndpointsService) {
   }

   /**
    * Sends HTTP request to return all Modules
    */
   getAllModules(): Observable<Module[]> {
      return this.http.get<Module[]>(this.endpoints.GET_ALL_MODULES);
   }

   /**
    * Sends HTTP request to return Module by ID
    * @param id Unique Identifier of Module to be returned
    */
   getModuleByID(id: number): Observable<Module> {
      return this.http.get<Module>(this.endpoints.GET_MODULE_BY_ID.replace('${id}', id.toString()));
   }

   /** used for debugging, loads Module[] from specified URL */
   getAllFakeModules(url: string): Observable<Module[]> {
      return this.http.get<Module[]>(url);
   }

   /**
    * Sends HTTP request to persist Module to back-end
    * @param module What module to persist to back-end
    */
   createNewModule(module: Module): Observable<HttpHeaderResponse> {
      let body: string = JSON.stringify(module);
      return this.http.post<HttpHeaderResponse>(this.endpoints.CREATE_NEW_MODULE, body, { headers: this.HEADERS });
   }
}

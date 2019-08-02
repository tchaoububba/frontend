import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from '../models/Module';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { EndpointsService } from '../constants/endpoints.service';
import { Content } from '../models/Content';
import { Filter } from '../models/Filter';

/**
 * Manages Content between Angular and back-end
 */
@Injectable({
   providedIn: 'root'
})
export class ContentFetcherService {
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
    * Sends HTTP request to create new Content
    * @param content What content to persist in back-end
    */
   createNewContent(content: Content): Observable<HttpHeaderResponse> {
      let body: string = JSON.stringify(content);
      return this.http.post<HttpHeaderResponse>(this.endpoints.CREATE_NEW_CONTENT, body, { headers: this.HEADERS });
   }

   /**
    * Sends HTTP request to return all Content
    */
   getAllContent(): Observable<Content[]> {
      return this.http.get<Content[]>(this.endpoints.GET_ALL_CONTENT);
   }

   /**
    * Sends HTTP request to return Content by ID
    * @param id
    */
   getContentByID(id: number): Observable<Content> {
      return this.http.get<Content>(this.endpoints.GET_CONTENT_BY_ID.replace('${id}', id.toString()));
   }

   /**
    * Sends HTTP request to edit Content with ID
    * @param id Unique Identifier to choose which Content to update
    * @param content Content containing new values to persist
    */
   updateContentById(id: number, content: Content): Observable<HttpHeaderResponse> {
      let body: string = JSON.stringify(content);
      return this.http.put<HttpHeaderResponse>(this.endpoints.UPDATE_CONTENT_BY_ID.replace('${id}', id.toString()), body, { headers: this.HEADERS });
   }
  
   /**
    * Method for updating content by content
    * @param newContent 
    */
   updateContentByContent(newContent: Content) {
      let body: string = JSON.stringify(newContent);
      return this.http.put(this.endpoints.UPDATE_CONTENT, body, { headers: this.HEADERS });
   }
   /** Not yet implemented, Untested 
    * @param id
    * @param modules
   */
   updateContentModulesById(id: number, modules: Module[]): Observable<HttpHeaderResponse> {
      let body: string = JSON.stringify(modules);
      return this.http.put<HttpHeaderResponse>(this.endpoints.UPDATE_CONTENT_MODULES_BY_ID.replace('${id}', id.toString()), body, { headers: this.HEADERS });
   }

   /**
    * Sends HTTP request to remove Content from back-end
    * @param id Unique identifier determining which Content to remove
    */
   deleteContentByID(id: number): Observable<HttpHeaderResponse> {
      return this.http.delete<HttpHeaderResponse>(this.endpoints.DELETE_CONTENT_BY_ID.replace('${id}', id.toString()));
   }

   /**
    * Sends HTTP request to return filtered Content
    * @param filter What to filter returned content by
    */
   filterContent(filter: Filter): Observable<Content[]> {
      let body: string = JSON.stringify(filter);
      return this.http.post<Content[]>(this.endpoints.FILTER_CONTENT, body, { headers: this.HEADERS });
   }
}
